import React, { useContext } from 'react';
import NoteContext from '../context/noteContext';

const Modal = () => {
    const { showModal, setShowModal } = useContext(NoteContext);
    const {fetchNotes,setFetchNotes,editNote}=useContext(NoteContext);
    const handleOnChange=(e)=>{
        setFetchNotes({...fetchNotes, [e.target.id]: e.target.value});
    };
    const handleSubmitClick = (e) => {
    e.preventDefault();
    editNote(fetchNotes.id, fetchNotes.title, fetchNotes.description, fetchNotes.tag);
    };
    return (
        <>
            {showModal && (
                <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Edit Note</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>

                            <div className="modal-body">
                                <form>
                                    <div className="container">
                                        <div className="title-container mb-3 ">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title"  cols="30" value={fetchNotes.title} onChange={handleOnChange} />
                                        </div></div>
                                    <div className="description-container mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="description"  cols="30" value={fetchNotes.description} onChange={handleOnChange} />
                                    </div>
                                    <div className="tag-container mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="tag"  cols="30" value={fetchNotes.tag} onChange={handleOnChange} />
                                    </div>
                                </form>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>

                                <button type="button" className="btn btn-primary" onClick={handleSubmitClick}>
                                    Save changes
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
