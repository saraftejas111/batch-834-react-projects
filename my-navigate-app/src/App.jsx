import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <center>

        <h1>Welcome to Navigate App</h1>

        <Navbar/>

                 <Routes>
                  <Route path='/loginpage' element={<Login/>}></Route>
                  <Route path='/dash' element={<Dashboard/>}></Route>
                 </Routes>
      </center>
    </>
  )
}

export default App
