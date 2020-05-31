const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
    },
    badge: {
        type: String,
        required: false,
        unique: false,
    },
}, {
    timestamps: true, 
});

const Company = mongoose.model('Compay', companySchema);

module.exports = Company;