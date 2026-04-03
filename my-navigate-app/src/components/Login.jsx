import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let [username, setUsername] = useState("")   // jay

    let [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (username == "tejas") {
            navigate("/dash", { state : {
                uname : username , 
                pass : password
            }  })
        }else {
            window.alert("invalid credentials")
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
        </div>
    )
}

export default Login
