import React, {useState} from 'react';
import ButtonsData from './../data/ButtonsData';
import Button from './Button';
import Snackbar from './Snackbar';

const Buttons = () => {
    const [isShownSnackbar, setIsShownSnackbar] = useState(false);
    const handleClick = () => {

        setIsShownSnackbar(true);

    };
    return (
        <>
            {ButtonsData.map(button =>
                <Button key={button.id} data={button}/>
            )}

        </>
    )
}

export default Buttons;
