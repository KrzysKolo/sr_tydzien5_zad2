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
    const [showSnackbar, setShowSnackbar] = useState(false);
    const handleOpenSnackbar = () => {
            setShowSnackbar(true);
            setTimeout(() => {
              setShowSnackbar(false);
            }, data.time);
    };
    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
    };
    return (
        <>

        <div className="btn"
        /* onClick={() => switchFunction(event)} */
        onClick={handleOpenSnackbar}
        style={isHover ? OverStyle : OutStyle}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <Icons icon={data.icon}/>
             {data.name}
        </div>
        {showSnackbar && <Snackbar type={data.type} position={data.position} message={data.message}  icon={data.icon} close={handleCloseSnackbar}/>}
        </>
    )
}

export default Button;
