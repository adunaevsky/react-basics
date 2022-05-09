import React, {useState, createContext} from 'react'
import Login from './context/Login'
import User from './context/User';

export const AppContext = createContext(null);

const Context = () => {

    const [username, setUsername] = useState("");

    return (
        <AppContext.Provider value={{username, setUsername}}>
            <Login />
            <User />
        </AppContext.Provider>
    )
}

export default Context;
