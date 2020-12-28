import React, use from 'react';
import Icons from './Icons';
import PaletColors from './../colors/PaletColors';

const Button = ({data, bgc}) => {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className="btn" onClick={data.event}>{bgc}
            <Icons icon={data.icon}/>
             {data.name}
        </div>
    )
}

export default Button;
