import React, { useEffect, useState } from 'react'
import { deleteEmployee, showAll } from '../apiServices'

const ShowAllEmployees = ({refresh , editEmp}) => {

    let [emps, setEmps] = useState([])

    const loadEmployees = () => {
        showAll().then(
            (res) => {
                console.log(res.data)
                setEmps(res.data)
            }
        ).catch((err) => console.log("error --> ", err))
    }

    useEffect(() => {
        loadEmployees();
    }, [refresh]

    )

    const handleDelete = (id) => {
        let del = confirm("Are you sure to Delete this data?")

        if (del) {
            deleteEmployee(id).then((res)=>{
                console.log("deleted" , res)
                loadEmployees();
            })
            .catch((err)=>console.log("error --> " , err))
        }
    }
    return (
        <div>
            <h2>All Employees</h2>

<table border="1">

         <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ROLE</th>
                <th>SALARY</th>
                <th>ACTIONS</th>
            </tr>
         </thead>

         <tbody>
            {
                emps.map(
                    (e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.role}</td>
                            <td>{e.salary}</td>
                            <td>

                                <button onClick={()=> editEmp(e)}>Update</button>
                                <button onClick={()=> handleDelete(e.id)}>Delete</button>
                            
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

export default ShowAllEmployees
