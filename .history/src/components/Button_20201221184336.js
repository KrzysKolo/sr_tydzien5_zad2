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
      const handleClickWarming = () => {
          console.log("warming");
      }
      const handleClickInformation = () => {
          console.log("info");
      }
      const handleClickSuccess = () => {
          console.log("sukces");
      }
    return (
        <div className="btn"
        onClick={`${data.event}`}
        style={isHover ? OverStyle : OutStyle}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <Icons icon={data.icon}/>
             {data.name}{data.event}
        </div>
    )
}

export default Button;
