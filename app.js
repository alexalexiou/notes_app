const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//const command = process.argv[2];
//console.log(process.argv);

//add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
        }
    },
    handler(argv){
     //console.log('title: %s, body: %s', argv.title, argv.body);
        notes.addNote(argv.title, argv.body);
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe:' Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        //console.log('Removing the note')
        notes.removeNote(argv.title);
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'List your note',
    handler(){
        //console.log('Listing out all notes');
        notes.listNotes();
    }
});

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe:' Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       // console.log('Reading the note')
       notes.readNote(argv.title);
    }
})

//add, remove, read, list

//console.log(yargs.argv);
yargs.parse();



