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
                case 'handleClickError':
                    const handleClickError = () => {
                    console.log("error");
                };
                case 'faExclamationTriangle': return <FontAwesomeIcon icon={faExclamationTriangle} />;
                case 'faQuestionCircle': return <FontAwesomeIcon icon={faQuestionCircle} />;
                case 'faCheckCircle': return <FontAwesomeIcon icon={faCheckCircle} />;
                default: return null;
                }



    }

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
        onClick={(data.event) => {
            switch({data.event}) {

            }
        } )}
        style={isHover ? OverStyle : OutStyle}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <Icons icon={data.icon}/>
             {data.name} ${data.event}
        </div>
    )
}

export default Button;
