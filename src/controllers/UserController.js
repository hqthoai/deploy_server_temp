const User = require('../models/User');

const UserController = {
    getAll: (req, res) => {
        User.find({})
        .then((users) => {
           res.status(200).json(users);
        }).catch((err) => {
            console.log('Error getting all users:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getById: (req, res) => {
        User.findOne({_id: req.params.id})
        .then((user) => {
           res.status(200).json(user);
        }).catch((err) => {
            console.log('Error getting a user:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    create: (req, res) => {
        User.create({...req.body})
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((err) => {
            console.log('Error creating user:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    update: (req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, {...req.body}, { new: true })
        .then((user)=>{
            res.status(200).json(user)
        })
        .catch((err)=>{
            console.log('Error updating user:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    delete: (req, res) => {
        User.findOneAndDelete({_id: req.params.id})
        .then(()=>{
            res.status(200).json("Delete successfully!")
        })
        .catch((err) => {
            console.log('Error deleting user:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },
    
}

module.exports = UserController;