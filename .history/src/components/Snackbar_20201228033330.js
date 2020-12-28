import React from 'react';

const Snackbar = ({type, message, icon}) => {
    return (
        <div className={`${type}`}>
           {icon}{message}
        </div>
    )
}

export default Snackbar
