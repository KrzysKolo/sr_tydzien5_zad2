import React, { useState } from 'react';
import Icons from './Icons';
import PaletColor from './../colors/PaletColors';

const Button = ({ data} ) => {
    const [isHovered, setIsHovered] = useState(false);
    const unhoveredStyle = {
        background: data.color,
        color: "#fff",
      };

      const hoveredStyle = {
        border: `2px solid ${data.color}`,
        backgroundColor: data.color,
        color: data.color
      };
    return (
        <div className="btn"
        onClick={data.event}
        style={isHovered ? hoveredStyle : unhoveredStyle
              }
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
