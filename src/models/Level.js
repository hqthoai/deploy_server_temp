const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const LevelSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    bigSkillId: {
        type: mongoose.Types.ObjectId,
        ref: 'BigSkill',
        required: true,
    }
}, 
{
    timestamps: true
});

LevelSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('Level', LevelSchema);
