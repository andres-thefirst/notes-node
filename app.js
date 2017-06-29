const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes');
const yargs = require('yargs');


const titleOptions = {
  description: "Title of note",
  demand: true,
  alias: "t"
};

const bodyOptions = {
  description: "description of note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command('add', 'Add a note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List All notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove note',{
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note successfully added');
    notes.logNote(note);
  } else {
    console.log('Error: Sorry the note was not added');
  }
} else if (command === 'list') {
  let listNotes = notes.getAll();
  console.log(`Printing ${listNotes.length}`);
  listNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not required');
}
