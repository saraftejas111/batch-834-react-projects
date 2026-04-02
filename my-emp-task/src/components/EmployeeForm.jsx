import React, { useEffect, useState } from 'react'
import { addEmployee, updateEmployee } from '../apiServices';

const EmployeeForm = ({ added, acceptEdit }) => {

    const emptyForm = { name: "", role: "", salary: "" }

    let [form, setForm] = useState(emptyForm)

    useEffect(() => {
        if (acceptEdit && acceptEdit.id) {
            setForm(acceptEdit)
        } else {
            setForm(emptyForm)
        }
    }, [acceptEdit])

    const handleChange = (e) => {
        let { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (acceptEdit && acceptEdit.id) {
            updateEmployee(form)
                .then((res) => {
                    console.log(res.data)
                    setForm(emptyForm)
                    added(1)
                })
                .catch((err) => console.log(err))
        } else {
            addEmployee(form)
                .then((res) => {
                    console.log(res.data)
                    setForm(emptyForm)
                    added(1)
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <div>

            {/* Conditional Rendering */}
            <h2>{acceptEdit && acceptEdit.id ? "Update Employee" : "Add Employee"}</h2>

            <form onSubmit={handleSubmit}>
                name :
                <input type="text" name="name" value={form.name} onChange={handleChange} />

                <br /><br />

                role :
                <input type="text" name="role" value={form.role} onChange={handleChange} />

                <br /><br />

                salary :
                <input type="text" name="salary" value={form.salary} onChange={handleChange} />

                <br /><br />

                <button type="submit">
                    {acceptEdit && acceptEdit.id ? "Update Employee" : "Add Employee"}
                </button>
            </form>
        </div>
    )
}

export default EmployeeForm