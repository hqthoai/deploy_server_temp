const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    authors: [{
        type: String,
        require: true,
    }],
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        require: true,
    },
    levelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level',
        require: true,
    }
}, 
{
    timestamps: true
});

BookSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('Book', BookSchema);
