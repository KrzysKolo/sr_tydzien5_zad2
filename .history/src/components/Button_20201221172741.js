import React, { useState } from 'react';
import Icons from './Icons';
import PaletColors from './../colors/PaletColors';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

const Button = ({data, bgc}) => {
    const [isHover, setIsHover] = useState(false)
    const hoverStyles = {
        background: bgc,
        color: PaletColors.white,

    }
    const unhoverStyles = {
        background: PaletColors.white,
        color: bgc,
        border: 1px solid bgc,
    }
    return (
        <div className="btn" onClick={data.event} style={isHover ? hoverStyles : unhoverStyles }>
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
