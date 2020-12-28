import React from 'react';
import AppData from './../data/AppData';
import Button from './Button';


const Buttons = () => {

    return (
        <>
            {AppData.map(button =>
                <Button key={button.id} data={button} />
            )}

        </>
    )
}

export default Buttons;
