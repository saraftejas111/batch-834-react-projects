
import { useState } from 'react'
import './App.css'
import Add from './components/Add'
import Form from './components/Form'
import Update from './components/Update'

function App() {

  let [action, setAction] = useState(true)

  let name = "Tejas Saraf"

  const handleAdd = (e) => {
    setAction(e)
  }

  return (
    <>
      <h1>Welcome to Props - task </h1>

      <Add addClick={handleAdd} />
      <Update updateClick={(e) => setAction(e)} />

      <Form perform={action}/>
    </>
  )
}

export default App
