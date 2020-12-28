import React from 'react';
import Icons from './Icons';
import PaletColors from './../colors/PaletColors';

const Button = ({data, bgc}) => {

    return (
        <div className="btn" style={{ backgroundColor: '{bgc}'}} >
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
