const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');

dotenv.config();

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [100, 'Name cannot exceed 100 characters'],
    validate: [
      {
        validator: async function(value) {
          // If the document is being newly created, perform the uniqueness check
          if (!this.isNew) {
            return true; // Skip uniqueness check for updates
          }
          
          // Perform uniqueness check for new documents
          const existingClient = await this.constructor.findOne({ name: value });
          return !existingClient;
        },
        message: props => `The name "${props.value}" is already in use.`
      }
    ]
    
  },
  numberOfEmployees: {
    type: Number,
    required: [true, 'Number of employees is required'],
    min: [1, 'Number of employees must be at least 1'],
    max: [10000, 'Number of employees cannot exceed 10,000'] // Adjust max value as needed
  },
  profilePicture: {
    public_id:{
      type: String,
    },
    url:{
      type: String,
    },
  },  
  industry: {
    type: String,
    required: [true, 'Industry is required'],
    trim: true,
    minlength: [3, 'Industry must be at least 3 character long'],
    maxlength: [50, 'Industry cannot exceed 50 characters']
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true,
    minlength: [3, 'Address must be at least 3 character long'],
    maxlength: [200, 'Address cannot exceed 200 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [
      {
        validator: function(value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: props => `${props.value} is not a valid email address!`
      },
      {
        validator: async function(value) {
          // If the document is being newly created, perform the uniqueness check
          if (!this.isNew) {
            return true; // Skip uniqueness check for updates
          }
          
          // Perform uniqueness check for new documents
          const existingClient = await this.constructor.findOne({ email: value });
          return !existingClient;
        },
        message: props => `The name "${props.value}" is already in use.`
      }
    ]
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
    validate: {
      validator: function(value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(value);
      },
      message: props => `Password must contain at least one uppercase letter, one lowercase letter, and one digit!`
    }
  },
  numberOfLocations: {
    type: Number,
    required: [true, 'Number of locations is required'],
    min: [1, 'Number of locations must be at least 1'],
    max: [100, 'Number of locations cannot exceed 100'] // Adjust max value as needed
  },
  structure: {
    type: String,
    required: [true, 'Structure is required'],
    trim: true,
    minlength: [3, 'Structure must be at least 3 character long'],
    maxlength: [50, 'Structure cannot exceed 50 characters']
  },
  verified:{
    type: Boolean,
    default: false,
    required: true,
  }
});


ClientSchema.pre('save', async function(next) {
  // Check if the password field is modified or is new
  if (!this.isModified('password')) {
    return next();
  }
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password using the generated salt
    const hash = await bcrypt.hash(this.password, salt);
    // Replace the plaintext password with the hashed password
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

ClientSchema.pre('save', function(next) {
  if (!this.profilePicture) {
    this.profilePicture = null; // Set to null if profile picture is not provided
  }
  next();
});


// Compare the plaintext password with the hashed password stored in the database
ClientSchema.methods.comparePassword = async function(plaintext) {
  try {
    return await bcrypt.compare(plaintext, this.password);
  } catch (error) {
    throw new Error(error);
  }
};
// create database connection

const usersConnection = mongoose.createConnection(process.env.USERS_URL);
// Add error handling
usersConnection.on('error', console.error.bind(console, 'connection error:'));
usersConnection.once('open', function() {
  console.log("Connected to users database");
});

const Client = usersConnection.model('Client', ClientSchema,'clients');


module.exports = Client;











