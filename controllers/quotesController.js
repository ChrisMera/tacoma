const db = require("../models");

// Defining methods for the quotesController
module.exports = {
  findAll: function (req, res) {
    db.Quote
      .find(req.query)
      .sort({ date: -1 })
      .then(docs => res.json(docsl))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Quote
      .findById(req.params.id)
      .then(docs => res.json(docs))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Quote
      .create(req.body)
      .then(console.log(req.body))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Quote
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(docs => res.json(docs))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Quote
      .findById({ _id: req.params.id })
      .then(docs => docs.remove())
      .then(docs => res.json(docs))
      .catch(err => res.status(422).json(err));
  }
};