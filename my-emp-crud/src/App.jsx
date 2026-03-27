import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AllEmployees from './components/AllEmployees'
import AddEmployee from './components/AddEmployee'

function App() {
  const [count, setCount] = useState(0)

  let [ref , setRef] = useState(0)

  return (
    <>
    <center>
       <h1>My Employee CRUD APP</h1>

     <AddEmployee setRefresh={(v) => setRef(ref+v) }/>
     <AllEmployees refresh = {ref}/> <br />
     
    </center>
    </>
  )
}

export default App
