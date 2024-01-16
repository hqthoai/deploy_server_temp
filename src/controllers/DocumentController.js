const Document = require('../models/Document');

const DocumentController = {
    getAll: (req, res) => {
        Document.find({})
        .then((documents) => {
           res.status(200).json(documents);
        }).catch((err) => {
            console.log('Error getting all documents:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    getById: (req, res) => {
        Document.findOne({_id: req.params.id})
        .then((document) => {
           res.status(200).json(document);
        }).catch((err) => {
            console.log('Error getting a document:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },

    create: (req, res) => {
        Document.create({...req.body})
        .then((document) => {
            res.status(201).json(document);
        })
        .catch((err) => {
            console.log('Error creating document:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    update: (req, res) => {
        Document.findOneAndUpdate({_id: req.params.id}, ...req.body)
        .then((document)=>{
            res.status(200).json(document)
        })
        .catch((err)=>{
            console.log('Error updating document:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            })
        });
    },

    delete: (req, res) => {
        Document.findOneAndDelete({_id: req.params.id})
        .then(()=>{
            res.status(200).json("Delete successfully!")
        })
        .catch((err) => {
            console.log('Error deleting document:', err);
            res.status(500).json({
                message: 'Server error: ' + err.message,
                err: err
            });
        });
    },
    
}

module.exports = DocumentController;