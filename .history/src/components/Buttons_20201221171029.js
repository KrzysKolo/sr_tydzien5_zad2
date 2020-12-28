import React from 'react';
import PaletColors from './../colors/PaletColors';
import ButtonsData from './../data/ButtonsData';
import Button from './Button';

const Buttons = () => {
    return (
        <>
            {ButtonsData.map(button =>
                <Button key={button.id} bgc={button.color} data={button} />
            )}
        </>
    )
}

export default Buttons;
