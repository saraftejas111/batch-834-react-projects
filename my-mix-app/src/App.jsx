
import { useState } from 'react';
import './App.css'

function App() {

  // let name = "Tejas" ; 

  let [name, setName] = useState("Tejas")

  let [count, setCount] = useState(0)



  const handleClick = () => {

    // name = "kiran" ; 

    setName("Kiran")

    console.log("button clicked...")

    console.log("name change to --> " + name)
  }


  function handleIncrease() {
    setCount(count + 1)
  }
  function handleDecrease() {
    setCount(count - 1)
  }

  return (
    <>
      <center>
        <h1>Welcome to My Mix App...{name}</h1>

        <button onClick={handleClick}>Click Me</button> <br /><br /><br />

        {/* html  ---> <button onclick="handleClick()">Click Me</button> */}
        <h2>Counter App</h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count * 0)}>Reset</button>

        <h2>Count = {count}</h2>
      </center>
    </>
  )
}

export default App
