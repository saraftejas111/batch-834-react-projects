
import { useState } from 'react'
import './App.css'
import AcceptMsg from './components/AcceptMsg'
import ChildComp from './components/ChildComp'
import FindAllComponent from './components/FindAllComponent'

function App() {

  let wishes = "happy birthday raj.."

  let [cmsg, setCmsg] = useState("")

  const handleMsg = (e) => {
    setCmsg(e)
  }

  return (
    <>
      <h1>Welcome to My Props App</h1>

      <FindAllComponent />

      <br /><br /><br />

      <AcceptMsg acceptWish={wishes} />

      <br />

      <ChildComp sendMsg={handleMsg} />

      <h2>Msg from Child to Parent = {cmsg}</h2>
    </>
  )
}

export default App
