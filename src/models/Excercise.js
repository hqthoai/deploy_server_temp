const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const ExcerciseSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    partId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Part',
    },
    skillId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
    },
    excerciseType: {
        type: Object,
    }
}, 
{
    timestamps: true
});

ExcerciseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('Excercise', ExcerciseSchema);
