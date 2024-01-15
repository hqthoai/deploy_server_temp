const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const DocumentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    path: {
        type: String,
        required: true,
    }
}, 
{
    timestamps: true
});

DocumentSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('Document', DocumentSchema);
