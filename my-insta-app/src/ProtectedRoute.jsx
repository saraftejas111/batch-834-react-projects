import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

      const userAccept = JSON.parse(localStorage.getItem('user'))
      
 if (userAccept.un !== "tejas"){
    return <Navigate to='/loginpage'></Navigate>
 }

 return <Outlet/>;
}

export default ProtectedRoute
