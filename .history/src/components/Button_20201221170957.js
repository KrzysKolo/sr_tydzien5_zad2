import React from 'react';
import Icons from './Icons';
import PaletColors from './../colors/PaletColors';

const Button = ({data}) => {

    return (
        <div className="btn" >
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
