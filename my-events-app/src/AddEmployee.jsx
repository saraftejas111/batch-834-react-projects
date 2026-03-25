import React, { useState } from 'react'

const AddEmployee = () => {

    let [employee, setEmployee] = useState({ empname: "", emprole: "", empsalary: "" })

    const handleChange = (e) => {
        let { name, value } = e.target;               // name = emprole , value = dev
        setEmployee({ ...employee, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(employee)
        setEmployee(
            { empname: "", emprole: "", empsalary: "" }
        )

    }


    return (
        <div>

            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>
                <h3>enter emp name : <input type="text" name="empname" value={employee.empname} onChange={handleChange} /></h3>
                <h3>enter emp role : <input type="text" name="emprole" value={employee.emprole} onChange={handleChange} /></h3>
                <h3>enter emp salary : <input type="text" name="empsalary" value={employee.empsalary} onChange={handleChange} /></h3>

                <button type='submit'>Add Employee</button>
            </form>
        </div>
    )
}

export default AddEmployee
