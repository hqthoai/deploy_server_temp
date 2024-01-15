const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    excerciseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Excercise',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    answer: {
        type: Object,
    },
    ordinalNumber: {
        type: String,
    }
}, 
{
    timestamps: true
});

QuestionSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('Question', QuestionSchema);
