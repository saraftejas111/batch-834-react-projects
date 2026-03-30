
import { useState, version } from 'react'
import './App.css'
import AddEmployee from './components/AddEmployee'
import ShowAll from './components/ShowAll'

function App() {

  let [plus , setPlus] = useState(0)

  let [emp , setEmp] = useState({})
  return (
    <>
      <center>

        <h1>Hello Welcome to Crud Dynamic App</h1>
        <br />

        <ShowAll refresh={plus} sendEmp={(e)=>setEmp(e)}/> <br /><br />

        <AddEmployee setAdd={(v)=> setPlus(plus+v)}  editEmp={emp}/>

   

      </center>
    </>
  )
}

export default App
