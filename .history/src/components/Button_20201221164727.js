import React from 'react';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Button = ({data}) => {


    return (
        <div className="btn">
            {data.icon ? <FontAwesomeIcon icon={data.icon} /> : "asa"}
             {data.name}
        </div>
    )
}

export default Button;
