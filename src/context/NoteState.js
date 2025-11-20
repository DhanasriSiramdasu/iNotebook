import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const [notes, setNotes] = useState([]);
    const getNotes = async () => {
        const response = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkxZWU0NzA1YjJkNDNkOTg5MTU4MzhlIn0sImlhdCI6MTc2MzYzMjI0MH0.9_DxN4qVI0z785sfxZcX-slSMow1q4aTuq5NcaT7imo"
            },
        });
        const json = await response.json();
        setNotes(json);
    };
    const addNote = async (title, description, tag) => {
        const response = await fetch("http://localhost:5000/api/notes/addnote", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkxZWU0NzA1YjJkNDNkOTg5MTU4MzhlIn0sImlhdCI6MTc2MzYzMjI0MH0.9_DxN4qVI0z785sfxZcX-slSMow1q4aTuq5NcaT7imo"
            },
            body: JSON.stringify({
                title: title,
                description: description,
                tag: tag
            }),
        });
        const note = await response.json();
        setNotes(notes.concat(note));
    };
    const deleteNote = async (id) => {
        console.log("Deleting the note with id " + id);
        const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkxZWU0NzA1YjJkNDNkOTg5MTU4MzhlIn0sImlhdCI6MTc2MzYzMjI0MH0.9_DxN4qVI0z785sfxZcX-slSMow1q4aTuq5NcaT7imo"
        }});
        const json = await response.json();
        console.log(json);
        setNotes(notes.filter((note) => note._id !== id));
    }
    const editNote = async (id,title, description, tag) => {
        const response = await fetch(`http://localhost:5000/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkxZWU0NzA1YjJkNDNkOTg5MTU4MzhlIn0sImlhdCI6MTc2MzYzMjI0MH0.9_DxN4qVI0z785sfxZcX-slSMow1q4aTuq5NcaT7imo"
            },
            body: JSON.stringify({
                title: title,
                description: description,
                tag: tag
            }),
        });
        const note = await response.json();
        setNotes(notes.concat(note));
    };
    return (
        // Since these state and update function are the providers of NoteContext
        <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes ,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
};
export default NoteState;
