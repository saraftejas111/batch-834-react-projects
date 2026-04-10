import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    //  const location = useLocation() ;

    //  const name = location.state ;

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("uname");

        navigate('/loginpage')


    }

    const userAccept = JSON.parse(localStorage.getItem('user'))
    return (
        <div>
            {/* <h2>Welcome to Dashboard... {name?.uname} </h2> */}
            <h2>Welcome to Dashboard...  {userAccept.un} </h2>

            <h3>{userAccept.pass}</h3>
            <nav>
                <Link to='profile'>Profile</Link> {" | "}
                <Link to='setting'>Setting</Link>
            </nav>

            <button onClick={handleLogout}>Logout</button>

            <Outlet />
        </div>
    )
}

export default Dashboard
