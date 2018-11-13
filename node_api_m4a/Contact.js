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
  city: String,
  state: String,
  lastEdited: String,
  geoLocation_lat : String,
  geoLocation_lng : String,
  preferredName: String,
  editedBy: String,
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