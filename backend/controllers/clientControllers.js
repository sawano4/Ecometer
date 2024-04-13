const Client = require('../Models/Client');
const VerificationToken = require('../Models/verificationToken');
const { generateOTP , mailTransport, emailVerificationTemplate , emailVerifiedTemplate } = require('../utils/mail');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const { isValidObjectId } = require('mongoose');

// register a client (create a new client)
const registerClient = async (req, res) => {
    const {
        name,
        email,
        password,
        numberOfEmployees,
        industry,
        address,
        numberOfLocations,
        structure,
    } = req.body;
 
    try {
     // Create a new client using Model.create()
     const newClient = new Client({name, email, password, numberOfEmployees, industry, address, numberOfLocations, structure});
 
     // Save the client to the database
     await newClient.save();
     console.log(newClient._id)
     // Generate a verification token
     const OTP = generateOTP();
     const newVerificationToken = new VerificationToken({owner: newClient._id, token: OTP});
     console.log(newVerificationToken.owner)
 
     // Save the verification token to the database
     await newVerificationToken.save();
 
     // Send verification email
     mailTransport().sendMail({
         from: 'ggez@gmail.com',
         to: newClient.email,
         subject: 'Verify your email account',
         html: emailVerificationTemplate(OTP),
     })
 
     // Return the newly created client in the response
     res.status(201).json({ msg : 'Client created successfully', data: newClient, verificationToken: newVerificationToken});
    } catch (error) {
     // If an error occurs during validation or database operation, handle it
     console.error('Error creating client:', error);
     res.status(400).json({ error: error.message });
    }
 }
 

// login the client
const loginClient = async (req , res) => {

    const { email , password } = req.body;
    if ( !email.trim() || !password.trim() ) {
        return res.status(400).json({ msg : 'Email and password are required'});
    }

    const client = await Client.findOne({email});
    if (!client) {
        return res.status(404).json({ msg : 'User not found'});
    }

    const isMatched = await client.comparePassword(password);
    if (!isMatched) {
        return res.status(400).json({ msg : 'Invalid password'});
    }
    
   jwt.sign({clientId: client._id}, process.env.JWT_SECRET,
    {expiresIn: '1d'}, (err, token) => {
        if (err) {
            console.error('Error generating token:', err);
            return res.status(500).json({ msg : 'Server error'});
        }
        res.status(200).json({ msg : 'Login successful', token});
    }
)
};

const verifyEmail = async (req, res) => {
    const { clientId , otp } = req.body;

    if(!clientId || !otp.trim()) {
        return res.status(400).json({ msg : 'Client ID and OTP are missing'});
    }

    if(!isValidObjectId(clientId)) return res.status(400).json({ msg : 'Invalid client ID'});

    const client = await Client.findById(clientId);
    if (!client) {
        return res.status(404).json({ msg : 'Client not found'});
    }

    if(client.verified){
        return res.status(400).json({ msg : 'Email already verified'});
    }

    const verificationToken = await VerificationToken.findOne({owner: clientId});
    if (!verificationToken) {
        return res.status(404).json({ msg : 'Token not found'});
    }

    const isMatched = await verificationToken.compareToken(otp);
    if (!isMatched) {
        return res.status(400).json({ msg : 'Invalid OTP'});
    }

    client.verified = true;

    try {
        await Client.updateOne({ _id: client._id }, { verified: true });
    
        await VerificationToken.findByIdAndDelete(verificationToken._id);
    
        mailTransport().sendMail({
            from: 'ggez@gmail.com',
            to: client.email,
            subject: 'Verification completed successfully',
            html: emailVerifiedTemplate(),
        });
    
        return res.status(200).json({ msg : 'Email verified successfully'});
    } catch (error) {
        console.error('Error verifying email:', error);
        return res.status(500).json({ msg : 'Internal server error'});
    }
};





module.exports = { registerClient , loginClient,verifyEmail};