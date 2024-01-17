const Topic = require('../models/Topic');

const TopicController = {
    getAll: (req, res) => {
        Topic.find({})
        .then((topics) => {
           res.status(200).json(topics);
        }).catch((err) => {
            console.log('Error getting all topics:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getById: (req, res) => {
        Topic.findOne({_id: req.params.id})
        .then((topic) => {
           res.status(200).json(topic);
        }).catch((err) => {
            console.log('Error getting a topic:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getByName: (req, res) => {
        Topic.find({name: { $regex: req.query.q, $options: 'i' }})
        .populate("bookId","name")
        .then((topics) => {
           res.status(200).json(topics);
        }).catch((err) => {
            console.log('Error getting a topic:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    create: (req, res) => {
        Topic.create({...req.body})
        .then((topic) => {
            res.status(201).json(topic);
        })
        .catch((err) => {
            console.log('Error creating topic:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    update: (req, res) => {
        Topic.findOneAndUpdate({_id: req.params.id}, ...req.body)
        .then((topic)=>{
            res.status(200).json(topic)
        })
        .catch((err)=>{
            console.log('Error updating topic:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    delete: (req, res) => {
        Topic.findOneAndDelete({_id: req.params.id})
        .then(()=>{
            res.status(200).json("Delete successfully!")
        })
        .catch((err) => {
            console.log('Error deleting topic:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },
    
}

module.exports = TopicController;