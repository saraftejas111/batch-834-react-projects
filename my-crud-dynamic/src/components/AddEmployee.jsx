import React, { useEffect, useState } from 'react'
import { addEmployee } from '../services';

const AddEmployee = ({ setAdd, editEmp }) => {

    let [form, setForm] = useState({ name: "", role: "", salary: "" })

    useEffect(
        () => {
            setForm(editEmp)
        }, [editEmp]
    )
    const handleChange = (e) => {

        let { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addEmployee(form).then((res) => {
            console.log(res.data)

            setForm({ name: "", role: "", salary: "" })

            setAdd(1)

        }).catch((err) => console.log("error --> ", err))
    }

    return (
        <div>
            <h2>{editEmp ? "Update Employee" : "Add Employee"}</h2>

            <form onSubmit={handleSubmit}>
                enter name  : <input type="text" name='name' value={form.name} onChange={handleChange} /> <br /><br />
                enter role  : <input type="text" name='role' value={form.role} onChange={handleChange} /> <br /><br />
                enter salary  : <input type="text" name='salary' value={form.salary} onChange={handleChange} /><br /><br />
                <button type='submit'>{editEmp ? "Update Employee" : "Add Employee"}</button>
            </form>
            <br /><br />
        </div>
    )
}

export default AddEmployee
