const Book = require('../models/Book');

const BookController = {
    getAll: (req,res) => {
        Book.find({})
        .then((books) => {
           res.status(200).json(books);
        }).catch((err) => {
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    }

    
}

module.exports = BookController;