
import { useState } from 'react'
import './App.css'
import EmployeeForm from './components/EmployeeForm'
import ShowAllEmployees from './components/ShowAllEmployees'

function App() {

  let [ref , setRef] = useState(0)

  let [edit , setEdit] = useState({})

  return (
    <>
      <center>
        <h1>Welcome to my emp task</h1>

        <ShowAllEmployees refresh={ref} editEmp={(e) => setEdit(e)}/> <br />

        <EmployeeForm added={(v) => setRef(ref+v)} acceptEdit={edit} />

      </center>
    </>
  )
}

export default App
