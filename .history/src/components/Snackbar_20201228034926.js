import React from 'react';
import Icons from './Icons';
const Snackbar = ({type, message, icon, position}) => {
    return (
        <div className={`snackbar ${type} ${position}`}>
           <Icons icon={icon} />{message}
        </div>
    )
}

export default Snackbar
