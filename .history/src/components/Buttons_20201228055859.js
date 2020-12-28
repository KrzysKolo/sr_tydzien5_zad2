import React from 'react';
import AppData from './../data/AppData';
import ButtonSnackbar from './ButtonSnackbar';


const Buttons = () => {

    return (
        <>
            {AppData.map(button =>
                <ButtonSnackbar key={button.id} data={button} />
            )}

        </>
    )
}

export default Buttons;
