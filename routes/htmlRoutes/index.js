//Dependencies
const router = require('express').Router();
const path = require("path");

//Path to notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//Path back to Homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//Catch all route
router.get("*", (req, res) => { 
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;