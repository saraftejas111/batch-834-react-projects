
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import Login from './Login'
import Navbar from './Navbar'
import ProtectedRoute from './ProtectedRoute'

function App() {

  return (
    <>
      <center>
        <h1>Welcome to Instagram</h1>

        <Navbar />
        <Routes>
          <Route path='/loginpage' element={<Login />}/>

          <Route path='/dash' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />


        </Routes>

      </center>
    </>
  )
}

export default App
