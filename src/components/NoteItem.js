import React from 'react';

const NoteItem = ({ note }) => {
    return (
        <div>
            <div className="card container my-3" style={{width:"18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash"></i>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <p className="card-text">{note.description}</p>
                        
                    </div>
            </div>
        </div>
    )
}

export default NoteItem;
