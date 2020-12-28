import React from 'react';
import ButtonsData from './../data/ButtonsData';
import Button from './Button';

const Buttons = () => {
    return (
        <>
            {ButtonsData.map(button =>
                <Button key={button.id} data={button} />
            )}
        </>
    )
}

export default Buttons;
