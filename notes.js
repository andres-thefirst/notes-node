const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('note-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('note-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  notes = fetchNotes();
  note = {
    title,
    body
  };

  var duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  return notes.filter(note => note.title === title)[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var filterNotes =  notes.filter(note => note.title !== title);
  saveNotes(filterNotes);

  return notes.length !== filterNotes.length;
}
var logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`::Title: ${note.title}`);
  console.log(`::Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
