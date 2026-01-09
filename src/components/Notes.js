import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/noteContext';
import NoteItem from './NoteItem';
import { useLocation } from "react-router-dom";

const Notes = () => {
  const location = useLocation();
  const { notes, getNotes } = useContext(NoteContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes(localStorage.getItem("token")); // <-- fetch notes only if logged in
    }
  }, [location.pathname]);
  return (
    <div className="container my-3">
    <div className="row">
      {notes.map((note) => (
        <div className="col-md-3" key={note._id}>
          <NoteItem id={note._id} note={note} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Notes;
