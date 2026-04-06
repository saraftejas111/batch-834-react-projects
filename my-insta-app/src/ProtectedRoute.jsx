import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const name = localStorage.getItem("uname")

 if (name != "tejas"){
    return <Navigate to='/loginpage'></Navigate>
 }

 return children ; 
}

export default ProtectedRoute
