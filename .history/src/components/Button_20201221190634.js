import React, { useState } from 'react';
import Icons from './Icons';

const Button = ({ data } ) => {
    const [event] = data;
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
      const switchFunction = (event) => {
        switch (event) {
                case 'handleClickError': handleClickError();
                default: return null;
                }
    }

    const handleClickError = () => {
        console.log("error");
    };


    return (
        <div className="btn"
        onClick={switchFunction({event})}
        style={isHover ? OverStyle : OutStyle}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <Icons icon={data.icon}/>
             {data.name} ${data.event}
        </div>
    )
}

export default Button;
