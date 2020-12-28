import React from 'react';
import Icons from './Icons';
const Snackbar = ({type, message, icon}) => {
    return (
        <div className={`snackbar ${type}`}>
           <Icons icon={icon} />{message}
        </div>
    )
}

export default Snackbar
