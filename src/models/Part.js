const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const PartSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    record: {
        type: String,
        required: true,
    },
    topicId: {
        type: mongoose.Types.ObjectId,
        ref: 'Topic',
        required: true,
    }
}, 
{
    timestamps: true
});

PartSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('Part', PartSchema);
