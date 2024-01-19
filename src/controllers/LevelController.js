const Level = require('../models/Level');

const LevelController = {
    getAll: (req, res) => {
        Level.find({})
        .then((levels) => {
           res.status(200).json(levels);
        }).catch((err) => {
            console.log('Error getting all levels:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getById: (req, res) => {
        Level.findOne({_id: req.params.id})
        .then((level) => {
           res.status(200).json(level);
        }).catch((err) => {
            console.log('Error getting a level:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    create: (req, res) => {
        Level.create({...req.body})
        .then((level) => {
            res.status(201).json(level);
        })
        .catch((err) => {
            console.log('Error creating level:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    update: (req, res) => {
        Level.findOneAndUpdate({_id: req.params.id}, {...req.body}, { new: true })
        .then((level)=>{
            res.status(200).json(level)
        })
        .catch((err)=>{
            console.log('Error updating level:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    delete: (req, res) => {
        Level.findOneAndDelete({_id: req.params.id})
        .then(()=>{
            res.status(200).json("Delete successfully!")
        })
        .catch((err) => {
            console.log('Error deleting level:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },
    
}

module.exports = LevelController;