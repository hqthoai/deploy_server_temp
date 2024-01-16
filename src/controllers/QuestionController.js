const Question = require('../models/Question');

const QuestionController = {
    getAll: (req, res) => {
        Question.find({})
        .then((questions) => {
           res.status(200).json(questions);
        }).catch((err) => {
            console.log('Error getting all questions:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getById: (req, res) => {
        Question.findOne({_id: req.params.id})
        .then((question) => {
           res.status(200).json(question);
        }).catch((err) => {
            console.log('Error getting a question:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    create: (req, res) => {
        Question.create({...req.body})
        .then((question) => {
            res.status(201).json(question);
        })
        .catch((err) => {
            console.log('Error creating question:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    update: (req, res) => {
        Question.findOneAndUpdate({_id: req.params.id}, ...req.body)
        .then((question)=>{
            res.status(200).json(question)
        })
        .catch((err)=>{
            console.log('Error updating question:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    delete: (req, res) => {
        Question.findOneAndDelete({_id: req.params.id})
        .then(()=>{
            res.status(200).json("Delete successfully!")
        })
        .catch((err) => {
            console.log('Error deleting question:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },
    
}

module.exports = QuestionController;