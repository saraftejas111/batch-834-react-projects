import axios from "axios";


export const showAll = () => axios.get(`http://localhost:9090/employees`)

export const addEmployee = (emp) => axios.post(`http://localhost:9090/save` , emp)

export const updateEmployee = (emp) => axios.put(`http://localhost:9090/update` , emp)

export const deleteEmployee = (id) => axios.delete(`http://localhost:9090/delete/${id}`)
