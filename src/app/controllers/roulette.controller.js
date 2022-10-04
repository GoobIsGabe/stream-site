const db = require("../models");
const Roulette = db.roulette;

// Create and Save a new 
exports.create = (req, res) => {
  
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  const Username = req.query.Username;
  const Result = req.query.Result;
  var condition1 = Username ? { Username: { $regex: new RegExp(Username), $options: "i" } } : {};
  var condition2 = Result ? { Result: { $regex: new RegExp(Result), $options: "i" } } : {};

  Roulette.find(condition1).find(condition2)
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
        message:
        err.message || "Yo something bad happened getting the roulette results"
    });
  });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};