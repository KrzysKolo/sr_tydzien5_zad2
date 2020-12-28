import React from 'react';
import Icons from './Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const Snackbar = ({type, message, icon, position, close}) => {
    return (
        <div className={`snackbar ${type} ${position}`}>
           <Icons icon={icon} />{message}
           <FontAwesomeIcon className="close" icon={faTimesCircle} onClick={close}/>
        </div>
    )
}

export default Snackbar
