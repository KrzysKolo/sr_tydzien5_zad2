import React, { useState } from 'react';
import Icons from './Icons';

const Button = ({data } ) => {

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
      const cos = data.event;
      const switchFunction = (cos) => {
        switch (cos) {
                case 'handleClickError': handleClickError();
                default: return null;
                }
    }

    const handleClickError = () => {
        console.log("error");
    };


    return (
        <div className="btn"
        onClick={() => switchFunction(cos)}
        style={isHover ? OverStyle : OutStyle}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <Icons icon={data.icon}/>
             {data.name} ${data.event}
        </div>
    )
}

export default Button;
