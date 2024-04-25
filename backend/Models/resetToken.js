const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');

dotenv.config();

const resetTokenSchema = new mongoose.Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,
    }
});

// Hash the token before saving the client to the database
resetTokenSchema.pre('save', async function(next) {

  if (!this.isModified('token') || !this.isNew) {
    return next();
  }

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the token using the generated salt
    const hash = await bcrypt.hash(this.token, salt);
    // Replace the plaintext token with the hashed token
    this.token = hash;
    next();
  } catch (error) {
    next(error);
  }
});

// Compare the plaintext token with the hashed token stored in the database
resetTokenSchema.methods.compareToken = async function(token) {
  try {
    return await bcrypt.compare(token, this.token);
  } catch (error) {
    throw new Error(error);
  }
};
// create database connection

const usersConnection = mongoose.createConnection(process.env.USERS_URL);
// Add error handling
usersConnection.on('error', console.error.bind(console, 'connection error:'));
usersConnection.once('open', function() {
  console.log("Connected to users Database");
});

const ResetToken = usersConnection.model('ResetToken', resetTokenSchema,'resetTokens');


module.exports = ResetToken;











