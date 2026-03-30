import React, { useEffect, useState } from 'react'
import { deleteEmployee, showAllEmployees } from '../services'

const ShowAll = ({ refresh , sendEmp }) => {

    let [employees, setEmployees] = useState([])

    useEffect(() => {
        loadEmployees();
    }, [refresh])

    const loadEmployees = () => {
        showAllEmployees().then((res) => {
            console.log(res.data)
            setEmployees(res.data)
        })
    }

    const handleDelete = (id) => {

        let answer = confirm("Are You Sure, Do yo want to Delete this Employee?")

        if (answer) {
            deleteEmployee(id).then(
                (res) => {
                    console.log("employee deleted --> ", res)
                    loadEmployees();
                }
            ).catch((err) => console.log("error --> ", err))
        }
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
                        <th>ACTION</th>
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
                                <td>
                                    <button onClick={() => handleDelete(emp.id)}>Delete</button>
                                    <button onClick={() => sendEmp(emp)}>Update</button>
                                </td>
                            </tr>
                        )

                        )
                    }
                </tbody>


            </table>
        </div>
    )
}

export default ShowAll
