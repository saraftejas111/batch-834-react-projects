import React, { useEffect, useState } from 'react'
import { showAllEmployees } from '../services'

const ShowAll = () => {

    let [employees, setEmployees] = useState([])

    useEffect(() => {
        loadEmployees();
    }, []

    )

    const loadEmployees = () => {
        // promise -->  .then [ mandatory ]   &  .catch [ not mandatory ]
        showAllEmployees().then((response) => {        
            console.log(response.data)
            setEmployees(response.data)
        }).catch((err) => {
            console.log("Error --> ", err)
        })
    }
    return (
        <div>

            <h1>Show All Employees</h1>

            {/* <button onClick={loadEmployees}>Show All</button> <br /><br /> */}

            <center>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>ROLE</th>
                            <th>SALARY</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map((emp) => (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.role}</td>
                                    <td>{emp.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </center>
        </div>
    )
}

export default ShowAll
