const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define Schema
const AdminSchema = new Schema({
  Nom: {
    type: String,
    required: [true, "Nom field is required"],
  },
  Prenom: {
    type: String,
    required: [true, "Prenom field is required"],
  },
  Email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (value) {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  Password: {
    type: String,
    required: [true, "Password field is required"],
    minlength: [6, "Password must be at least 6 characters long"],
    validate: {
      validator: function (value) {
        // Custom password validation (e.g., at least one uppercase letter, one lowercase letter, and one digit)
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(value);
      },
      message: (props) =>
        `Password must contain at least one uppercase letter, one lowercase letter, and one digit!`,
    },
  },
  Role: {
    type: String, // can be: 'admin', 'superadmin'
    required: [true, "Role field is required"],
  },
});

//create model
const usersConnection = mongoose.createConnection(process.env.USERS_URL);
// Add error handling
usersConnection.on('error', console.error.bind(console, 'connection error:'));
usersConnection.once('open', function() {
  console.log("Connected to users database");
});

const Admin = usersConnection.model('Admin', AdminSchema,'admins');

module.exports = Admin;
