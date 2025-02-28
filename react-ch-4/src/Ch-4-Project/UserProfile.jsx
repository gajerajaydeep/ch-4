import React, { Children, createContext, useContext, useState } from 'react'
import DashBoard from './DashBoard';

const UserProfileContext = createContext();

export default function UserProfile() {

    //userName useState
    const [name, setName] = useState("jaydeep")
   

    //handle image
    const [profilePicture, setProfilePicture] = useState("abc.jpg");

  
    //handle theme
    const [theme, setTheme] = useState("light");
 

    //handleLanguage
    const [language, setLanguage] = useState("en")

   
   

 


    const value = {
        name,
        setName,
        profilePicture,
        theme,
        language,
        setProfilePicture,
        setTheme,
        setLanguage,
      
    }

    return (
        <>
          

            <UserProfileContext.Provider value={value}>
                <DashBoard/>
            </UserProfileContext.Provider>

        </>
    )
}

export function useUserProfile() {
    return useContext(UserProfileContext)
}
