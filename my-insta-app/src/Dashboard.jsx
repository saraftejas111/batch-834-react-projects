import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    //  const location = useLocation() ;

    //  const name = location.state ;

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("uname");

        navigate('/loginpage')


    }

    const name = localStorage.getItem('uname')
    return (
        <div>
            {/* <h2>Welcome to Dashboard... {name?.uname} </h2> */}
            <h2>Welcome to Dashboard... {name} </h2>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
