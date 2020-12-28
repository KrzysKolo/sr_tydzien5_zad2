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
                case 'handleClickError': handleClickError(); break;
                case 'handleClickWarming': handleClickWarming();break;
                case 'handleClickInformation': handleClickInformation();break;
                case 'handleClickSuccess': handleClickSuccess();break;
                default: return null;
                }
    }

    const handleClickError = () => {
        console.log("error");
    };
    const handleClickWarming = () => {
        console.log("warming");
    };
    const handleClickInformation = () => {
        console.log("info");
    };
    const handleClickSuccess = () => {
        console.log("success");
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
