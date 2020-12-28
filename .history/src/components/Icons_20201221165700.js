import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faQuestionCircle, } from '@fortawesome/free-solid-svg-icons';

const Icons = ({icon}) => {

        switch (icon) {
            case 'faExclanationCircle': return <FontAwesomeIcon icon={faExclanationCircle} />;
            case 'faExclanationTriangle': return <FontAwesomeIcon icon={faExclanationTriangle} />;
            case 'faQuestionCircle': return <FontAwesomeIcon icon={faQuestionCircle} />;
            case 'faCheckCircle': return <FontAwesomeIcon icon={faCheckCircle} />;
            default: return null;
            }



}

export default Icons;
