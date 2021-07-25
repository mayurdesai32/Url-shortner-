const mongoose = require('mongoose');
const shortid = require('shortid');
const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
});

const Url = mongoose.model('URL', urlSchema);
//USER  will be converted to users
module.exports = Url;
