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
      /*const event = data.event;
      const switchFunction = (event) => {
        switch (event) {
                case 'handleClick': handleClick(); break;
               case 'handleClickWarming': handleClickWarming(); break;
                case 'handleClickInformation': handleClickInformation(); break;
                case 'handleClickSuccess': handleClickSuccess(); break;
                default: return null;
                }
    }

     const handleClickWarming = () => {
        console.log(data.info);
    };
    const handleClickInformation = () => {
        console.log(data.info);
    };
    const handleClickSuccess = () => {
        console.log(data.info);
    }; */


    return (
        <>

        <div className="btn"
        /* onClick={() => switchFunction(event)} */
        onClick={handleClick}
        style={isHover ? OverStyle : OutStyle}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <Icons icon={data.icon}/>
             {data.name}
        </div>
        {isShownSnackbar && <Snackbar type={data.type} />}
        </>
    )
}

export default Button;
