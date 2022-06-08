const notes = [6,8,9,2,5,10];

const getNotes = () => {
    let sumOfNotes = 0;
    for (const note of notes){
        sumOfNotes = sumOfNotes + note;
    }
    average(sumOfNotes);
}

const average = (allNotes) => {
    let length = notes.length;
    console.log("Average : ", allNotes / length) 
}

getNotes();
