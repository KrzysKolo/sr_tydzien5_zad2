import React from 'react';
import Icons from './Icons';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Button = ({data}) => {


    return (
        <div className="btn">
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
