import React, { useState } from 'react';
import Icons from './Icons';
import PaletColor from './../colors/PaletColors';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

const Button = ({data, bgc}) => {

    return (
        <div className="btn"
        onClick={data.event}
        style={{backgroundColor: "`${bgc}`" }}>{bgc}
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
