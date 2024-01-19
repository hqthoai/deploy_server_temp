const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const LevelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    bigSkill: {
        type: String,
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
