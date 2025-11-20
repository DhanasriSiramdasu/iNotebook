import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
    const [notes, setNotes] = useState([]);
    const addNote=(title,description,tag)=>{
        const newNote={
            _id:"6342f2fcf4a0b23e8c8b4567",
            title:title,
            description:description,
            tag:tag
        }
        setNotes(notes.concat(newNote));
    }
    const deleteNote=(id)=>{
        console.log("Deleting the note with id"+id);
    }
    return (
        // Since these state and update function are the providers of NoteContext
        <NoteContext.Provider value={{notes, addNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
