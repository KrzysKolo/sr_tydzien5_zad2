import React, { useState } from 'react';
import Icons from './Icons';
import Snackbar from './Snackbar';

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
    const [isShownSnackbar, setIsShownSnackbar] = useState(false);
    const handleClickError = () => {
        console.log(data.info);
        setIsShownSnackbar(true);
        <Snackbar info={data.info} />
    };
    const handleClickWarming = () => {
        console.log(data.info);
    };
    const handleClickInformation = () => {
        console.log(data.info);
    };
    const handleClickSuccess = () => {
        console.log(data.info);
    };


    return (
        <div className="btn"
        onClick={() => switchFunction(event)}
        style={isHover ? OverStyle : OutStyle}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
