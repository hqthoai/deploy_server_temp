const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const SkillSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    record: {
        type: String,
        required: true,
    },
    partId: {
        type: mongoose.Types.ObjectId,
        ref: 'Part',
        required: true,
    }
}, 
{
    timestamps: true
});

SkillSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('Skill', SkillSchema);
