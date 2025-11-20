import React from 'react';

const Alert = (props) => {
    return (
        <div className="alert alert-primary d-flex justify-content-between align-items-center"role="alert">
            {props.message}
            <i
                className="fa-solid fa-xmark"
                style={{ cursor: "pointer" }}
                onClick={(e) => e.target.closest(".alert").remove()}
            ></i>
        </div>
    );
};

export default Alert;
