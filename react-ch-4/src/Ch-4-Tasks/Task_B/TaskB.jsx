import React from 'react'
import { useTheme } from './ThemeContext'
import './TaskB.css'

export default function TaskB() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className='theme-container'
      style={{
        backgroundColor: theme === 'light' ? 'rgb(229, 240, 250)' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        height: "100vh"
      }}>
        
      <h1>Current Theme: {theme}</h1>
      <button className='theme-btn' onClick={toggleTheme}>Chnage Theme</button>
    </div>
  )
}
