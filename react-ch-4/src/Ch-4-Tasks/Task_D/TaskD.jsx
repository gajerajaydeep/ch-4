import React, { useState } from 'react'
import { useTheme } from '../Task_D/ThemeContextTaskD'
import './TaskD.css'



export default function TaskD() {

    const { theme, changeTheme } = useTheme()
    // const [border, setBorder] = useState("black");

    console.log(theme);

    // switch (theme) {
    //     case 'light': {
    //         setBorder("black")
    //     }
    //     case 'dark': {
    //         setBorder("dark")
    //     }
    //     case 'blue': {
    //         setBorder("blue")
    //     }
    //     case 'red': {
    //         setBorder("red")
    //     }
    // }

    return (
        <>
            <div className="btn-container" style={{ backgroundColor: theme,
                border: theme ? ("5px solid black") : ("5px solid yellow")
             }}>
                <button
                    onClick={() => changeTheme('light')}

                >Light</button>
                <button onClick={() => changeTheme('dark')}>Dark</button>
                <button onClick={() => changeTheme('blue')}>Blue</button>
                <button onClick={() => changeTheme('red')}>Red</button>
            </div >
            {/* <h1>hello</h1> */}


        </>
    )
}
