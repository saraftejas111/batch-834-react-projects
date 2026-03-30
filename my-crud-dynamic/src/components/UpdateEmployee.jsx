import React, { useState } from 'react'
import { updateEmployee } from '../services'

const UpdateEmployee = () => {

    let [form, setForm] = useState({ id: "", name: "", role: "", salary: "" })

    const handleChange = (e) => {

        let { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        updateEmployee(form).then((res) => {
            console.log(res.data)

            setForm({id:"" , name: "", role: "", salary: "" })

        }).catch((err) => console.log("error --> ", err))
    }

    return (
        <div>
            <h2>Update Employee</h2>

            <form onSubmit={handleSubmit}>
                enter id  : <input type="text" name='id' value={form.id} onChange={handleChange} /> <br /><br />
                enter name  : <input type="text" name='name' value={form.name} onChange={handleChange} /> <br /><br />
                enter role  : <input type="text" name='role' value={form.role} onChange={handleChange} /> <br /><br />
                enter salary  : <input type="text" name='salary' value={form.salary} onChange={handleChange} /><br /><br />
                <button type='submit'>Update Employee</button>
            </form>

            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatum maxime corrupti pariatur reprehenderit obcaecati at! Et, reiciendis totam asperiores fugit molestiae dolorem placeat dolor libero modi quaerat sit illo aliquid animi aut? Ea repudiandae officiis modi incidunt. Natus cum, adipisci illum, vero quaerat autem dolorem quibusdam soluta exercitationem maxime voluptate beatae impedit ab error! Quam eos harum iure possimus nesciunt iste voluptate perspiciatis pariatur quaerat sunt perferendis eveniet explicabo aliquid minima atque similique, odit vero? Eligendi, laborum consequatur soluta dolorum praesentium velit iure facere vero perspiciatis at fuga ratione cupiditate voluptatem quis impedit iusto pariatur aperiam. Illum, doloribus excepturi?
            </div>
        </div>
    )

}

export default UpdateEmployee
