const mongoose = require('mongoose');  
const ContactSchema = new mongoose.Schema({  
  firstName: String,
  lastName: String,
  address: String,
  phonenumber: String,
  email: String,
  timeAdded: String,
  pronoun: String,
  additionalNotes: String,
  addedBy: String,
  city: String,
  state: String,
  lastEdited: String,
  geoLocation_lat : String,
  geoLocation_lng : String,
  preferredName: String,
  editedBy: String,
});
mongoose.model('Contact', ContactSchema);
module.exports = mongoose.model('Contact');