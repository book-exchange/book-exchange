var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `title` is required and of type String
  instructorFirstName: {
    type: String,
    required: false
  },
  instructorLastName: {
    type: String,
    required: false
  },
  street: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  // `link` is required and of type String
  state: {
    type: String,
    required: false
  },
  zip: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  totalMembers: {
    type: Number,
    required: false
  },
  typeOfGym: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    expires: '7d',
    required: false
  },
  time: {
    type: String,
    required: false
  }

  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
});

// This creates our model from the above schema, using mongoose's model method
var Event = mongoose.model("Event", UserSchema);


// Export the Article model
module.exports = Event;