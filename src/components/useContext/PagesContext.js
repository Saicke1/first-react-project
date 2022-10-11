import React, { createContext, useState } from 'react'

export const pageNumbers = createContext();

const PagesContext = (props) => {

    const [pageNumber, setPageNumber] = useState(1);

    return (
        <div>
            <pageNumbers.Provider value={[pageNumber, setPageNumber]}>
                {props.children}
            </pageNumbers.Provider>
        </div>
    )
    
};

export default PagesContext
