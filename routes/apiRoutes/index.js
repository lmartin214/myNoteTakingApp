//Dependencies
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid'); //Unique ID
const { notes } = require("../../db/db.json");  //Link to the db.son file
const { listNote, rmvNote } = require("../noteHandler"); //Module exports from noteHandler file'

 //GET request for notes
router.get("/notes", (req, res) => {
  let savedNotes = notes;
  res.json(savedNotes);
});

 //POST request for note
router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  const newNote = listNote(req.body, notes);
  res.json(newNote);
});

// DELETE request for note
router.delete("/notes/:id", (req, res) => { 
  const byID = req.params.id
  rmvNote(byID, notes);
  res.redirect('');
});

module.exports = router; // exports router