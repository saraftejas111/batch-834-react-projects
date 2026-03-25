import { useState } from 'react'
import './App.css'
import AddEmployee from './AddEmployee'

function App() {

  let [name, setName] = useState("")
  let [password, setPassword] = useState("")
  let [msg, setMsg] = useState("")

  const handleUsername = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setName(e.target.value)
  }
  const handlePassword = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    console.log("login start")
    if (name == "tejas" && password == "tka123") {
      setMsg("Login Success")
    } else {
      setMsg("Login failed")
    }
    console.log("login end")
  }

  return (
    <>
      <center>
        <h1>Hello from Events App..{name}</h1>

        {/* to accept input values we use onChange event */} <br />

        <h2>Enter your name : <input type="text" name="username" onChange={handleUsername} /></h2>
        <h2>Enter your password : <input type="text" name="password" onChange={handlePassword} /></h2>

        <button type='button' onClick={handleLogin}>Login</button>

        <h2 id='msg'>{msg}</h2>

        <AddEmployee/>

        <p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quos distinctio aspernatur molestiae praesentium dignissimos sint cumque nihil, voluptates quasi nulla minima. Velit ad maxime doloribus, distinctio libero perspiciatis unde animi molestiae natus aliquam vitae aspernatur quaerat ullam fugit eos expedita nesciunt, odio dolorum, architecto quo? Quos perspiciatis iste sed architecto eaque magni, fuga facere quod, nemo dignissimos officia ut porro reiciendis vel sunt assumenda laborum soluta, fugit aspernatur. Fugit et nihil ducimus doloremque fugiat consequatur repellendus numquam maxime hic iste atque voluptatem a, eligendi doloribus distinctio consectetur dicta saepe ipsum, exercitationem alias laboriosam mollitia, omnis nisi ut. Consequuntur quo adipisci eum harum dolore dolor in optio maxime tempore ipsa velit ex, quas at unde? Perferendis odit, expedita dignissimos debitis quos quae reprehenderit cum molestiae nulla aspernatur quaerat quo illum perspiciatis minus, atque laboriosam sunt non nam ratione dolorum nesciunt est eum neque. Voluptate assumenda pariatur perspiciatis qui voluptatibus, non consequuntur similique repellendus nobis modi quam et, totam molestias ducimus ad at id. Quo commodi aut quam doloribus, dignissimos facere cumque repellendus ullam officia, voluptas ut laudantium qui ducimus sequi, repudiandae amet nostrum voluptatem rem totam inventore. Ratione optio eligendi adipisci consequuntur corporis voluptatibus enim assumenda illum nostrum labore. Placeat.        </p>
      </center>
    </>
  )
}

export default App
