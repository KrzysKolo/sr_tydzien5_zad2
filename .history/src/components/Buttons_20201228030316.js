import React from 'react';
import ButtonsData from './../data/ButtonsData';
import Button from './Button';

const Buttons = () => {
    const [isShownSnackbar, setIsShownSnackbar] = useState(false);
    const handleClick = () => {

        setIsShownSnackbar(true);

    };
    return (
        <>
            {ButtonsData.map(button =>
                <Button key={button.id} data={button} onClick={handleClick}/>
            )}
        </>
    )
}

export default Buttons;
