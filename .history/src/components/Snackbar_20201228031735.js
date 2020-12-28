import React from 'react';

const Snackbar = ({type}) => {
    return (
        <div className={` ${type}`}>
           Snackbar: {type}
        </div>
    )
}

export default Snackbar
