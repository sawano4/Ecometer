const mongoose = require('mongoose');
const {AchatsDeServices} = require('./Models/Category'); // Import the model


// Connect to MongoDB
const test = async ()=> {
try{
    await mongoose.connect('mongodb+srv://moussoubillel:billel2004@sawanus.xw7ivfh.mongodb.net/?retryWrites=true&w=majority&appName=Sawanus');
    console.log('Database connected');
    const matchingDocs = await AchatsDeServices.find({});
    console.log(matchingDocs);
}catch(error){
    console.error('Error connecting to MongoDb', error);
}
}

test();