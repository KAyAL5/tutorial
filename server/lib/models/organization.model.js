const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orgSchema = new Schema({
    organization: {
        type: String, 
        require: true,
        unique: true
    },
    contact: {
        type: String
    },
    name: {
        type: String, 
        require: true
    },
    address: {
        type: String
    },
    createdon:{
        type: Date, 
        require: true,
        default: Date.now
    },
    isactive:{
        type: Boolean, 
        default: true
    }
});

module.exports = mongoose.model('origanization', orgSchema);