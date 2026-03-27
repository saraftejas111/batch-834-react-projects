import React, { useEffect, useState } from 'react'
import { showAllEmployees } from '../services'

const AllEmployees = ({refresh}) => {
    let [emps, setEmps] = useState([])

    useEffect(() => {
        loadEmployees();
    }, [refresh])

    const loadEmployees = () => {

        showAllEmployees().then((res) => {
            console.log(res.data)
            setEmps(res.data)
        })

        console.log(emps)
    }

    return (
        <div>

            <h2>Show All Employees</h2>

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
                        emps.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.role}</td>
                                <td>{e.salary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllEmployees
