//Dependencies
const path = require('path');
const fs = require('fs');

//Function to handle note deleting
function rmvNote(id, noteHandlerArray) {
  const delNotes = id;
  for (let i = 0; i < noteHandlerArray.length; i++) {
    if (delNotes === noteHandlerArray[i].id) {
      noteHandlerArray.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: noteHandlerArray }, null, 2), err => {
          if (err) {
            throw err;
          }
        });
    }
  }
}

//Function to handle new note
function listNote(body, noteHandlerArray) {
  const takeNewNote = body
  noteHandlerArray.push(takeNewNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: noteHandlerArray }, null, 2)
  );
  return takeNewNote;
};
module.exports = { // exports functions
  rmvNote,
  listNote,
}; 