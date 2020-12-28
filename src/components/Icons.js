import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faQuestionCircle, faExclamationTriangle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Icons = ({icon}) => {

        switch (icon) {
            case 'faExclamationCircle': return <FontAwesomeIcon icon={faExclamationCircle} />;
            case 'faExclamationTriangle': return <FontAwesomeIcon icon={faExclamationTriangle} />;
            case 'faQuestionCircle': return <FontAwesomeIcon icon={faQuestionCircle} />;
            case 'faCheckCircle': return <FontAwesomeIcon icon={faCheckCircle} />;
            default: return null;
            }



}

export default Icons;
