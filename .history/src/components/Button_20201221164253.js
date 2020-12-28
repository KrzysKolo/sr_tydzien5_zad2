import React from 'react';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Button = ({data}) => {

    return (
        <div className="btn">
            <FontAwesomeIcon>{data.icon} </FontAwesomeIcon>{data.name}
        </div>
    )
}

export default Button;
