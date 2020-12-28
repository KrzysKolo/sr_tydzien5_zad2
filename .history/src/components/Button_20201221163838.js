import React from 'react';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';

const Button = ({data}) => {

    return (
        <div className="btn">
            <FontAwesomeIcon icon={data.icon} />{data.name}
        </div>
    )
}

export default Button;
