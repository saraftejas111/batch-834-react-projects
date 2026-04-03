import React from 'react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {

    const location = useLocation() ; 

    const data = location.state ;
  
    return (
    <div>
      <h2>Welcome {data?.uname} to Dashboard...</h2>

      <h3>username = {data?.uname}</h3> 
      <h3>password = {data?.pass}</h3> 
    </div>
  )
}

export default Dashboard
