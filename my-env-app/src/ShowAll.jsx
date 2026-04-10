import React, { useEffect, useState } from 'react'
import { api } from './apiServices'

const ShowAll = () => {

    let [emps, setEmps] = useState([])

    let [form, setForm] = useState("")

    const loadEmployees = () => {

        api.get('/employees').then(
            (res) => {
                setEmps(res.data)
            }
        ).catch((err) => console.log('error --> ', err))
    }

    useEffect(
        () => {
            loadEmployees();
        }, []
    )
    return (
        <div>

            <table border='1'>
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

export default ShowAll
