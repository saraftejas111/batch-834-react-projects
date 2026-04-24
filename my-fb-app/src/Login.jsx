import React, { useState } from 'react'
import { api } from './apiServices';

const Login = () => {

    let [user, setUser] = useState({ email: "", password: "" })

    const handleChange = (e) => {

        let { name, value } = e.target;
    setUser({ ...user, [name]: value })
}



const handleSubmit = async (e) => {
    e.preventDefault();

    api.post('login' , user).then(
      (res) =>{
          if (!res.data.name) {
            alert("Invalid Credentials")
            setUser({ email: "", password: "" })
          } else {
             console.log("success --> " , res.data)
             console.log(res.status)
             console.log(res.statusText)
             console.log(res.data.name)

          }
      }
    ).catch((err)=> console.log("error --> " , err))
    

}

return (
    <div>

        <form onSubmit={handleSubmit}>
            enter username <input type="text" name='email' value={user.email} onChange={handleChange} /> <br /><br />
            enter password <input type="password" name='password' value={user.password} onChange={handleChange} /><br /><br />
            <button>Login</button>
        </form>

                <button onClick={}>Register New User</button>
    </div>
)
}

export default Login
