import React from 'react';
import PaletColors from './../colors/PaletColors';
import ButtonsData from './../data/ButtonsData';

const Buttons = () => {
    return (
        <>
            {ButtonsData.map(button => {
                <Button key={button.id} data={button} />
            })}
        </>
    )
}

export default Buttons;
