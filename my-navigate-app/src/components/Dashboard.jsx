import React from 'react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {

    const location = useLocation() ; 

    const data = location.state ;
  
    return (
    <div>
      <h2>Welcome {data?.uname} to Dashboard...</h2>

      <h4>username = {data?.uname}</h4> 
      <h4>password = {data?.pass}</h4> 
    </div>
  )
}

export default Dashboard
