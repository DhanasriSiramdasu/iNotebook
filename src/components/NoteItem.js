import React, { useContext} from 'react';
import NoteContext from '../context/noteContext';

const NoteItem = (props) => {
    const { deleteNote } = useContext(NoteContext);
    const {setShowModal, fetchNote}=useContext(NoteContext);
    const handleOnClick = () => {
        console.log("Deleting ID:", props.id);
        deleteNote(props.id);
    };
    const handleEditClick = () => {
    console.log("editing");
    setShowModal(true);
    fetchNote(props.id);
};
    return (
        <>
            <div className="card container my-3" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <i className="fa-solid fa-trash" onClick={handleOnClick}></i>
                    <i className="fa-solid fa-pen-to-square" onClick={handleEditClick}></i>
                    <p className="card-text">{props.note.description}</p>

                </div>
            </div>
        </>
    )
}

export default NoteItem;
