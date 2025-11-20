import React,{ useContext } from 'react';
import NoteContext from '../context/noteContext';

const NoteItem = (props) => {
    const {deleteNote}=useContext(NoteContext);
    const handleOnClick=()=>{
        console.log("Deleting ID:", props.id);
        deleteNote(props.id);
    }
    return (
        <div>
            <div className="card container my-3" style={{width:"18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{props.note.title}</h5>
                        <i className="fa-solid fa-trash" onClick={handleOnClick}></i>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <p className="card-text">{props.note.description}</p>
                        
                    </div>
            </div>
        </div>
    )
}

export default NoteItem;
