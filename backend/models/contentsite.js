// This file defines a Mongoose schema for a site configuration model.
const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  siteName: { type: String},
  logoheader: { type: String, required: true },
  siteDescription: { type: String, required: true },
  hero:{ type: String, required: true },
  footer:{ type: String, required: true },
  contactEmail: { type: String, required: true },
  emailuser:{type: String, required: true},
  passworduser:{type: String, required: true},
  logohero: { type: String, required: true }, // رابط الشعار
  selected :{type:String, enum:['selected', 'not selected'],default:"not selected" },
});

module.exports = mongoose.model('Site', siteSchema);