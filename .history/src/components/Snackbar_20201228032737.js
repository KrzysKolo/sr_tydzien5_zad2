import React from 'react';

const Snackbar = ({type, message}) => {
    return (
        <div className={`${type}`}>
           {message}
        </div>
    )
}

export default Snackbar
