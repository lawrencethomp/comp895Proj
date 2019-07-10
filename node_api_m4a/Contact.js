const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  address: {type: String, required: true},
  phonenumber: {type: String, required: true},
  email: {type: String, required: false},
  timeAdded: String,
  pronoun: String,
  additionalNotes: Array,
  city: String,
  state: String,
  lastEdited: String,
  geoLocation_lat : String,
  geoLocation_lng : String,
  preferredName: String,
  editedBy: String,
  zipcode: String,
  preferences: {
    supportACA: String,
    votedInMidterms : String,
    politicalViews : String,
    supportM4A : String,
    incomeLevel: String,
  },
  addedBy: String,
});
mongoose.model('Contact', ContactSchema);
module.exports = mongoose.model('Contact');