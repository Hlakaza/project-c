let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../models/user.model'),
    fs = require('fs'),
    mongooseUniqueValidator = require('mongoose-unique-validator');

let form = new Schema({
    tradingName: { type: String },
    registeredCompanyName: { type: String },
    registrationNumber: { type: String },
    physicalAddress: { type: String },
    postalAddress: { type: String },
    tel: { type: String },
    faxNo: { type: String },
    website: { type: String },
    vatNumber: { type: String },
    accPersonName: { type: String },
    accPersonNo: { type: String },
    accPersonFaxNo: { type: String },
    accPersonEmail: { type: String },
    salesPersonName: { type: String },
    salesPersonNo: { type: String },
    salesPersonEmail: { type: String },
    salesPersonFaxNo: { type: String },
    imagePath: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: { createdAt: 'dateSubmitted' }
});

form.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Form', form);