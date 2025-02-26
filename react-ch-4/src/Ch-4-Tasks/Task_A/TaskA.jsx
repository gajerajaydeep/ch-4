import React from 'react'
import { useAuth } from './AuthContext'


export default function TaskA() {

    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

    const logIn = (e) => {
        // e.preventDefault()
        setIsLoggedIn(true)
        setAuthUser({
            Name: "Jaydeep"
        })
    }
    const logOut = (e) => {
        // e.preventDefault()
        setIsLoggedIn(false)
        setAuthUser("please login")
    }
 
    return (
        <>
            <h1>User is Currently :{isLoggedIn ? ("Logged-in") : ("Logged out-Please Login")} </h1>
            <br />
            {isLoggedIn ? (<h2>User name : {authUser.Name}</h2>) : null}
            <br />

            {isLoggedIn
                ?
                <button onClick={(e) => { logOut(e) }}>Log out</button>
                :
                <button onClick={(e) => { logIn(e) }}>Log in</button>
            }

          
        </>
    )
}
