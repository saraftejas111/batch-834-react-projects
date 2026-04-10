
import './App.css'
import ShowAll from './ShowAll'

function App() {


  console.log("hello App.jsx")

  console.log(import.meta.env.VITE_API_URL)



  return (
    <>
      <center>
        <h1>Welcome to My .env App..</h1>

        <ShowAll/>
      </center>
    </>
  )
}

export default App
