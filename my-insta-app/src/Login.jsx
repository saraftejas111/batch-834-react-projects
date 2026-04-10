import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = () => {

        //  navigate("/dash" , {state :{uname : username }})

        let userData = {un : username , pass : password }

        localStorage.setItem("user" , JSON.stringify(userData))

        navigate('/dash')

        console.log(username)
        console.log(password)

    }

    return (
        <div>
            <h2>Login</h2>

            <input type="text" placeholder='enter username or  email' onChange={(e) => setUsername(e.target.value)} /> <br /><br />
            <input type="password" placeholder='enter password' onChange={(e) => setPassword(e.target.value)} /> <br /><br />

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
