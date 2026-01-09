import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [fetchNotes, setFetchNotes] = useState({ id: "", title: "", description: "", tag: "" });
    const getNotes = async (authtoken) => {
        const response = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken
            },
        });
        const json = await response.json();
        setNotes(json);
    };
    const addNote = async (title, description, tag) => {
        const response = await fetch("http://localhost:5000/api/notes/addnote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
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
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(notes.filter((note) => note._id !== id));
        props.showAlert("success","Note deleted successfully");
    }
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`http://localhost:5000/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                title: title,
                description: description,
                tag: tag
            }),
        });
        const updatedNote = await response.json();
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note._id === id ? updatedNote : note
            )  
        );
        props.showAlert("success","Note updated successfully");
    };
    const fetchNote = async (id) => {
        console.log("Editing the note with id " + id);
        const response = await fetch(`http://localhost:5000/api/notes/getnote/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json);
        console.log("Received JSON:", json);
        const { title, description, tag } = json;
        setFetchNotes({ id, title, description, tag });
    }
    return (
        // Since these state and update function are the providers of NoteContext
        <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes, editNote, showModal, setShowModal, fetchNotes, setFetchNotes, fetchNote }}>
            {props.children}
        </NoteContext.Provider>
    )
};
export default NoteState;
