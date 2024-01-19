const Part = require('../models/Part');

const PartController = {
    getAll: (req, res) => {
        Part.find({})
        .populate("topicId", "name")
        .then((parts) => {
           res.status(200).json(parts);
        }).catch((err) => {
            console.log('Error getting all parts:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getById: (req, res) => {
        Part.findOne({_id: req.params.id})
        .populate("topicId", "name")
        .then((part) => {
           res.status(200).json(part);
        }).catch((err) => {
            console.log('Error getting a part:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    create: (req, res) => {
        Part.create({...req.body})
        .then((part) => {
            res.status(201).json(part);
        })
        .catch((err) => {
            console.log('Error creating part:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    update: (req, res) => {
        Part.findOneAndUpdate({_id: req.params.id}, {...req.body}, { new: true })
        .then((part)=>{
            res.status(200).json(part)
        })
        .catch((err)=>{
            console.log('Error updating part:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    delete: (req, res) => {
        Part.findOneAndDelete({_id: req.params.id})
        .then(()=>{
            res.status(200).json("Delete successfully!")
        })
        .catch((err) => {
            console.log('Error deleting part:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },
    
}

module.exports = PartController;