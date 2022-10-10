import React, { createContext, useState } from "react";

export const storedStates = createContext();

const UseContext = (props) => {

    const [pageNumber, setPageNumber] = useState(1);
    const [popUp, setPopUp] = useState(false);

    const store = {
        page: [pageNumber, setPageNumber],
        popping: [popUp, setPopUp],
    }

    return (
        <div>
            <storedStates.Provider value={store}>
                {props.children}
            </storedStates.Provider>
        </div>
    );
};

export default UseContext;
