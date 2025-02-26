import React, { useState, useEffect, useContext } from "react";
import TaskA from "./TaskA";
//create Context
const AuthContext = React.createContext();
// console.log(AuthContext);


//customHook
export function useAuth(){

    return useContext(AuthContext);
}

//AuthProvider
export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }
    return (
        <AuthContext.Provider value={value}>
            {/* console.log(); */}
            
            {/* {props.children} */}
            <TaskA/>
        </AuthContext.Provider>
    )
}