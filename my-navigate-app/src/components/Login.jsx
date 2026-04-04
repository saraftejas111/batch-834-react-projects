import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

    let [username, setUsername] = useState("")   // jay

    let [password, setPassword] = useState("")

    let [msg , setMsg] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (username == "tejas") {
            navigate("/dash", { state : {
                uname : username , 
                pass : password
            }  })
        }else {
           setMsg("invalid credentials")
        }


    }
    return (
        <div>
            <h2>Login</h2>


            <form onSubmit={handleSubmit}>
                usename : <input type="text" onChange={(e) => setUsername(e.target.value)} /> <br /><br />
                password : <input type="text" onChange={(e) => setPassword(e.target.value)} /> <br /><br />
                <button type='submit'>Login</button>
            </form>

            <h3>{msg}</h3>
        </div>
    )
}

export default Login
