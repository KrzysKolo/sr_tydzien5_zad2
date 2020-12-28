import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faQuestionCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Icons = ({icon}) => {

        switch (icon) {

            case 'faQuestionCircle': return <FontAwesomeIcon icon={faQuestionCircle} />;
            case 'faCheckCircle': return <FontAwesomeIcon icon={faCheckCircle} />;
            default: return null;
            }



}

export default Icons;
