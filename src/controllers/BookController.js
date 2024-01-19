const Book = require('../models/Book');

const BookController = {
    getAll: (req, res) => {
        Book.find({})
        .then((books) => {
           res.status(200).json(books);
        }).catch((err) => {
            console.log('Error getting all books:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getById: (req, res) => {
        Book.findOne({_id: req.params.id})
        .then((book) => {
           res.status(200).json(book);
        }).catch((err) => {
            console.log('Error getting a book:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    create: (req, res) => {
        Book.create({...req.body})
        .then((book) => {
            res.status(201).json(book);
        })
        .catch((err) => {
            console.log('Error creating book:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    update: (req, res) => {
        Book.findOneAndUpdate({_id: req.params.id}, {...req.body}, { new: true })
        .then((book)=>{
            res.status(200).json(book)
        })
        .catch((err)=>{
            console.log('Error updating book:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    delete: (req, res) => {
        Book.findOneAndDelete({_id: req.params.id})
        .then(()=>{
            res.status(200).json("Delete successfully!")
        })
        .catch((err) => {
            console.log('Error deleting book:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },
    
}

module.exports = BookController;