import React, { useContext } from 'react';
import NoteContext from '../context/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
  const { notes } = useContext(NoteContext);

  return (
    <div className="row">
      {notes.map((note) => (
        <div className="col-md-3" key={note._id}>
          <NoteItem note={note} />
        </div>
      ))}
    </div>
  );
};

export default Notes;
