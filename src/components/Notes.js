import React, { useContext ,useEffect} from 'react';
import NoteContext from '../context/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
  const { notes, getNotes } = useContext(NoteContext);
  useEffect(()=>{
    getNotes();
  }, []);
  return (
    <div className="row">
      {notes.map((note) => (
        <div className="col-md-3" key={note._id}>
          <NoteItem id={note._id} note={note} />
        </div>
      ))}
    </div>
  );
};

export default Notes;
