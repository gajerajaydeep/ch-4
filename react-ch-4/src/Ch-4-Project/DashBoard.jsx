import React from 'react'
import { useUserProfile } from "./UserProfile"
import './UserProfile.css'

export default function DashBoard() {
    const { name,
        setName,
        profilePicture,
        theme,
        language,
        setProfilePicture,
        setTheme,
        setLanguage,

    } = useUserProfile();

    const handleUserName = (e) => {
        // console.log(setName(e.target.value));
        setName(e.target.value)
    }
    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0]
        // console.log(file);
        setProfilePicture(URL.createObjectURL(file))
    }


    const handleLanguage = (e) => {
        setLanguage(e.target.value)
    }

    //text of user profile----------------------------------
    const translations = {
        en: {
            greeting: 'Well Come!! ',
            description: `User Name is : ${name}`,
            userData: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus doloribus ab voluptatum adipisci, reprehenderit porro atque qui quibusdam esse accusamus'
        },
        es: {
            greeting: 'Bien venido',
            description: `El nombre de usuario es:${name}`,
            userData: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus ab voluptatum adipisci, reprehenderit porro atque qui quibusdam esse accusamus'
        },
    };
    // -----------------------------------------

    const handleFormSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("name", name)
        localStorage.setItem("profile", profilePicture)
        // console.log(name);

    }
    const handleTheme = (e) => {
        // console.log(e.target.value);
        if(e.target.value === "olive"){
            alert("olive theme is not suppertd")
        }else{

            setTheme(e.target.value)
        }
    }

    const chageBgColor = () => {
        return theme == "light" ? '#ffffff' : '#333333'
    }
    const changeTextColor = () => {
        return theme == "light" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
    }

    return (
        <>
        <h1 style={{textAlign:"center"}}>User DashBoard</h1>
            <div className="userProfile-container" style={{
                backgroundColor: chageBgColor(),
                color: changeTextColor()
            }}>
                <div className="user-body">
                    <h1>User Profile</h1>
                    <label>User Name :
                        <input type="text" placeholder='User Name' value={name} onChange={handleUserName} />
                    </label>
                    {/* <button onClick={() => { setName(username) }}>Submit</button> */}

                    <div>
                        <input type="file" onChange={handleProfilePictureChange} />
                        {/* <img src={profilePicture} alt="Profile" width={"100px"} /> */}
                    </div>

                    <div>
                        <select name="" id="" onChange={handleTheme} >
                            <option value="light"
                            >Light</option>
                            <option value="dark">Dark</option>
                            <option value="olive">olive</option>
                        </select>
                    </div>

                    <div>
                        <select name="" id="" onChange={handleLanguage}>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>
                    <button onClick={handleFormSubmit}>Submit</button>
                </div>


                <div className='user-data'>
                    <h1>User Name : {name}</h1>
                    <img src={profilePicture} alt="Profile" width={"200px"} />
                    <h2>{translations[language].greeting}</h2>
                    <p>{translations[language].description}</p>
                    <p>{translations[language].userData}</p>
                </div>

            </div>
        </>
    )
}
