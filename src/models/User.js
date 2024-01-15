const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    }, 
    role: {
        type: String,
        required: true,
    },
    isActived: {
        type: Boolean,  default: true 
    }, 
    accessToken: { 
        type: String, default:""
    },
    refreshTokens: [{
        type: String, default:"" 
    }],
}, 
{
    timestamps: true
});

UserSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('User', UserSchema);
