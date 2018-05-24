var mongoose = require('mongoose');  
var ContactSchema = new mongoose.Schema({  
  name: String,
  address: String,
  phonenumber: String,
  email: String
});
mongoose.model('Contact', ContactSchema);
module.exports = mongoose.model('Contact');