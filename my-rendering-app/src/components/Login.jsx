import React, { useState } from 'react'

const Login = () => {

    let [emp, setEmp] = useState({ name: "", email: "", password: "" })

    let [show, setShow] = useState(false)
    let [msg, setMsg] = useState(null)

    const handleShow = () => {
        setShow(!show)
        console.log("show function")
    }

    const handleChange = (e) => {

        let {name , value} = e.target ; 

        setEmp({...emp , [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit start")

        if (emp.name == "tejas" && emp.email == "tejas@tka.com" && emp.password == "tka123") {

            console.log("if block")
            setMsg(true)
            setEmp(
                { name: "", email: "", password: "" }
            )
        }else{
            setMsg(false)
        }

        console.log("submit end")
    }

    return (
        <div>

            <h2>Enter Login Details</h2>

            <form onSubmit={handleSubmit} >
                <h3>enter name : <input type="text" name='name' value={emp.name} onChange={handleChange} /></h3>
                <h3>enter email : <input type="email" name='email' value={emp.email} onChange={handleChange} /></h3>

                <h3>enter password : <input type={show ? "text" : "password"} name='password' value={emp.password} onChange={handleChange} /> <button type='button' onClick={handleShow}>{show ? "hide password" : "show password"}</button></h3>

                <button type='submit'>Login</button>
            </form>

            <h3>{msg==null ? "" : msg ? "Login Success" : "Login Failed"}</h3>

        </div>
    )
}

export default Login
