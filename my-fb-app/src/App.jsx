import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Login'

function App() {

  console.log(import.meta.env.VITE_API_URL)

  return (
    <>
      <center>
        <h2>Welcome</h2>

        <Login/>
      </center>
    </>
  )
}

export default App
