import React, { useState } from 'react'
import { addEmployee } from '../services';

const AddEmployee = ({setRefresh}) => {

    let [form, setForm] = useState({ name: "", role: "", salary: "" })

    const handleChange = (e) => {

        let {name, value} = e.target;

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addEmployee(form).then((res) => {

            console.log("employee added successfully..   ", res)

            setForm({ name: "", role: "", salary: "" })

            setRefresh(1)
            

        }).catch((error) => console.log("error occured --> ", error)

        )
    }
    return (
        <div>

            <h2>Add Employee Form</h2>

            <form onSubmit={handleSubmit} >

                enter name : <input type="text" name='name' value={form.name} onChange={handleChange} /> <br /><br />
                enter role : <input type="text" name='role' value={form.role} onChange={handleChange} /> <br /><br />
                enter salary : <input type="text" name='salary' value={form.salary} onChange={handleChange} /> <br /><br />

                <button type='submit'>Add Employee</button>

            </form>
        </div>
    )
}

export default AddEmployee
