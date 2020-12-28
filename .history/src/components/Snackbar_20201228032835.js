import React from 'react';

const Snackbar = ({type, message}) => {
    return (
        <div className={`${type}`}>
           {type}
        </div>
    )
}

export default Snackbar
