import axios from "axios";


export const showAllEmployees = () => axios.get("http://localhost:9090/employees") ; 