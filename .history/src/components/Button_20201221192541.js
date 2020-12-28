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
      const event = data.event;
      const switchFunction = (event) => {
        switch (event) {
                case 'handleClickError': handleClickError(); break;
                case 'handleClickWarming': handleClickWarming(); break;
                case 'handleClickInformation': handleClickInformation(); break;
                case 'handleClickSuccess': handleClickSuccess(); break;
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
        onClick={() => switchFunction(event)}
        style={isHover ? OverStyle : OutStyle}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <Icons style={{fontSize: '2rem',}} icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
