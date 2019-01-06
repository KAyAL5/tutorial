const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : { 
        type: String, 
        require: true,
        unique: true
    },
    username: {
        type: String, require: true
    },
    password: {
        type: String, 
        require:true
    },
    usertype: {
        type: String,
        require:true
    },
    createdon:{
        type: Date, 
        require: true,
        default: Date.now
    },
    token:{
        type: String, 
        require: false,
        default: null
    }
});

// Export Contact model
 module.exports = mongoose.model('user', userSchema);