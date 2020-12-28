import React, { useState } from 'react';
import Icons from './Icons';
import PaletColor from './../colors/PaletColors';

const Button = ({ data} ) => {
    const [isHovered, setIsHovered] = useState(false);
    const unhoveredStyle = {
        border: `2px solid ${data.color}`,
        color: data.color
      };

      const hoveredStyle = {
        border: `2px solid ${data.color}`,
        backgroundColor: color,
        color: data.color
      };
    return (
        <div className="btn"
        onClick={data.event}
        style={{backgroundColor: `${data.color}` },
                {isHovered ? hoveredStyle : unhoveredStyle} ,
              }
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
