const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const BigSkillSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
}, 
{
    timestamps: true
});

BigSkillSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('BigSkill', LevelSchema);
