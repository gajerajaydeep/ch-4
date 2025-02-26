import React from 'react'
import './TaskC.css'
import { useTheme } from '../Task_B/ThemeContext'

export default function TaskC() {
    const { theme, toggleTheme } = useTheme()
    return (
        <>
            <div
                className="navbar-container"
                style={{
                    backgroundColor: theme ==="light" ? 'rgb(229, 240, 250)' : '#333',
                    color: theme === 'light' ? '#000' : '#fff'
                }}
            >
                <nav>
                    <ul>
                        <li><a href="#" style={{ color: theme === 'light' ? '#000' : '#fff'}}>Home</a></li>
                        <li><a href="#" style={{ color: theme === 'light' ? '#000' : '#fff'}}>About</a></li>
                        <li><a href="#" style={{ color: theme === 'light' ? '#000' : '#fff'}}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
