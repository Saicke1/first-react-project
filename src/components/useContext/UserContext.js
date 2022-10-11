import React, { createContext, useState } from 'react'

export const userInfo = createContext();

const UserContext = (props) => {

    const [users, setUsers] = useState([{userid: 1, firstname: "Sarah", lastname: "Manicke", mail: "sarah@mail.com", password: "testing", state: false }, {userid: 2, firstname: "Katia", lastname: "Bezzina", mail: "katia@mail.com", password: "testing", state: false}]);

    return (
        <div>
            <userInfo.Provider value={[users, setUsers]}>
                {props.children}
            </userInfo.Provider>
        </div>
    )
};

export default UserContext