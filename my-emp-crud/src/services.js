import axios from "axios";


// export const showAllEmployees = () => axios.get("http://localhost:8080/employees")  // db.json

export const showAllEmployees = () => axios.get("http://localhost:9090/employees")   // Java RESTAPI

export const addEmployee = (emp) => axios.post("http://localhost:9090/save" , emp)