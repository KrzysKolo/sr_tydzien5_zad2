import React from 'react';
import Icons from './Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const Snackbar = ({type, message, icon, position}) => {
    return (
        <div className={`snackbar ${type} ${position}`}>
           <Icons icon={icon} />{message}
           <FontAwesomeIcon icon={faTimesCircle} />
        </div>
    )
}

export default Snackbar
