import React, { useState } from 'react';
import Icons from './Icons';
import PaletColor from './../colors/PaletColors';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import PaletColors from './../colors/PaletColors';

const Button = ({ data} ) => {

    return (
        <div className="btn"
        onClick={data.event}
        style={{backgroundColor: `${data.color}` }}>{data.color}
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
