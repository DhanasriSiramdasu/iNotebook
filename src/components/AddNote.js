import React, { useState, useContext,useEffect } from 'react'
import NoteContext from '../context/noteContext';

const AddNote = () => {
    const [userName, setUserName] = useState("");
    const { addNote } = useContext(NoteContext);
    const [notes, setNotes] = useState({ title: "", description: "", tag: "Default" });
    const handleOnclick = (e) => {
        e.preventDefault();          // ❗ Prevent page reload
        // Call context function
        addNote(notes.title, notes.description, notes.tag);
        setNotes({ title: "", description: "", tag: "Default" });
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getUserName();
        }
    }, []);
    const onChange = (e) => {
        setNotes({ ...notes, [e.target.id]: e.target.value });
    }
    const getUserName = async () => {
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });

        const json = await response.json();
        console.log(json.name);
        setUserName(json.name); // store into state
    };
    return (
        <div className="container">
            <h1>Add Note</h1>
            <form>
                <div className="container">
                    <div className="title-container mb-3 ">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={notes.title} cols="30" onChange={onChange} />
                    </div></div>
                <div className="description-container mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" value={notes.description} onChange={onChange} />
                </div>
                <button type="submit" className="btn" style={{ backgroundColor: "#FFEC5C", color: "black" }} onClick={handleOnclick}>Submit</button>
            </form>
            <h2 className="my-2" >Hello {userName}!!! Your notes-</h2>
        </div>
    )
}

export default AddNote;
