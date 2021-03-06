import React, { useState } from 'react';
import Icons from './Icons';

const Button = ({ data} ) => {
    const [isHover, setIsHover] = useState(false);
    const OutStyle = {
        border: `2px solid ${data.color}`,
        background: data.color,
        color: "#fff",
      };

      const OverStyle = {
        border: `2px solid ${data.color}`,
        backgroundColor: "#fff",
        color: data.color,

      };
      const handleClickError = () => {
          console.log("error");
      }
    return (
        <div className="btn"
        onClick={handleClickError}
        style={isHover ? OverStyle : OutStyle}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
