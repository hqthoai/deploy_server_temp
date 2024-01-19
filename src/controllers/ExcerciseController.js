const Excercise = require('../models/Excercise');

const ExcerciseController = {
    getAll: (req, res) => {
        Excercise.find({})
        .populate("partId", "name")
        .populate("skillId", "name")
        .then((excercises) => {
           res.status(200).json(excercises);
        }).catch((err) => {
            console.log('Error getting all excercises:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getById: (req, res) => {
        Excercise.findOne({_id: req.params.id})
        .populate("partId", "name")
        .populate("skillId", "name")
        .then((excercise) => {
           res.status(200).json(excercise);
        }).catch((err) => {
            console.log('Error getting a excercise:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getByPartId: (req, res) => {
        Excercise.find({partId: req.params.id})
        .then((excercises) => {
           res.status(200).json(excercises);
        }).catch((err) => {
            console.log('Error getting a excercise:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getBySkillId: (req, res) => {
        Excercise.find({skillId: req.params.id})
        .then((excercises) => {
           res.status(200).json(excercises);
        }).catch((err) => {
            console.log('Error getting a excercise:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    create: (req, res) => {
        Excercise.create({...req.body})
        .then((excercise) => {
            res.status(201).json(excercise);
        })
        .catch((err) => {
            console.log('Error creating excercise:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    update: (req, res) => {
        Excercise.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
        .then((excercise)=>{
            res.status(200).json(excercise)
        })
        .catch((err)=>{
            console.log('Error updating excercise:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    delete: (req, res) => {
        Excercise.findOneAndDelete({_id: req.params.id})
        .then(()=>{
            res.status(200).json("Delete successfully!")
        })
        .catch((err) => {
            console.log('Error deleting excercise:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },
    
}   

module.exports = ExcerciseController;