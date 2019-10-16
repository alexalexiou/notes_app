const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();
    //callback function, like for each in java, takes input each element in the array
    const duplicateNotes = notes.find(x => x.title === title);


    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green('New note added'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('notes.json', dataJSON);
   s.writeFileSync('notes.json', dataJsON);
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notes2 = notes.filter(x => x.title !== title);

    if (notes2.length === notes.length) {
        console.log(`No title: ${title} was found to remove`);
        console.log(chalk.red('no title was found'));
    } else {
        saveNotes(notes2);
        console.log(`Removing Note with title: ${title}`);
        console.log(chalk.green('note removed'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green('Your notes:'));
    notes.forEach(element => {
        console.log(element.title);
    });
    //console.log(notes.)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

const readNote = (title) => {
    const notes = loadNotes();
    const myNote = notes.find( (x) => x.title === title );

    if(myNote){
        console.log(chalk.green(title));
       console.log(myNote.body);
    }else{
        console.log(chalk.red("Note not found"))
    }
}

module.exports = {
    
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}

