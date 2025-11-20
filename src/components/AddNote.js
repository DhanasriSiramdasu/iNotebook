import React, { useState, useContext } from 'react'
import NoteContext from '../context/noteContext';

const AddNote = () => {
    const { addNote } = useContext(NoteContext);
    const [notes, setNotes] = useState({ title: "", description: "", tag: "Default" });
    const handleOnclick = (e) => {
        e.preventDefault();          // ❗ Prevent page reload
        // Call context function
        addNote(notes.title, notes.description, notes.tag);
    }

    const onChange = (e) => {
        setNotes({ ...notes, [e.target.id]: e.target.value });
    }
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
                <button type="submit" className="btn btn-primary" onClick={handleOnclick}>Submit</button>
            </form>
            <h2>Your notes-</h2>
        </div>
    )
}

export default AddNote;
