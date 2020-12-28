import React, { useState } from 'react';
import Icons from './Icons';

const Button = ({ data} ) => {
    const [isHover, setIsHover] = useState(false);
    const unHoverStyle = {
        border: `2px solid ${data.color}`,
        background: data.color,
        color: "#fff",

      };

      const hoverStyle = {
        border: `2px solid ${data.color}`,
        backgroundColor: "#fff",
        color: data.color,

      };
    return (
        <div className="btn"
        onClick={data.event}
        style={isHover ? hoverStyle : unHoverStyle}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
