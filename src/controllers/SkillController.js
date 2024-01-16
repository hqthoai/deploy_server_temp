const Skill = require('../models/Skill');

const SkillController = {
    getAll: (req, res) => {
        Skill.find({})
        .then((skills) => {
           res.status(200).json(skills);
        }).catch((err) => {
            console.log('Error getting all skills:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getById: (req, res) => {
        Skill.findOne({_id: req.params.id})
        .then((skill) => {
           res.status(200).json(skill);
        }).catch((err) => {
            console.log('Error getting a skill:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    create: (req, res) => {
        Skill.create({...req.body})
        .then((skill) => {
            res.status(201).json(skill);
        })
        .catch((err) => {
            console.log('Error creating skill:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    update: (req, res) => {
        Skill.findOneAndUpdate({_id: req.params.id}, ...req.body)
        .then((skill)=>{
            res.status(200).json(skill)
        })
        .catch((err)=>{
            console.log('Error updating skill:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    delete: (req, res) => {
        Skill.findOneAndDelete({_id: req.params.id})
        .then(()=>{
            res.status(200).json("Delete successfully!")
        })
        .catch((err) => {
            console.log('Error deleting skill:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },
    
}

module.exports = SkillController;