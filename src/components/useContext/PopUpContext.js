import React, { createContext, useState } from 'react';

export const togglePopup = createContext();

const PopUpContext = (props) => {

    const [popUp, setPopUp] = useState(false);

    return (
        <div>
            <togglePopup.Provider value={[popUp, setPopUp]}>
                {props.children}
            </togglePopup.Provider>
        </div>
    )
    
};

export default PopUpContext