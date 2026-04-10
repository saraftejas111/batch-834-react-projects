
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import Login from './Login'
import Navbar from './Navbar'
import ProtectedRoute from './ProtectedRoute'
import Settings from './Settings'
import Profile from './Profile'

function App() {

  return (
    <>
      <center>
        <h1>Welcome to Instagram</h1>

        <Navbar />
        <Routes>
          <Route path='/loginpage' element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/dash' element={<Dashboard />}>

              {/* Nested routes */}
              <Route path='profile' element={<Profile />} />
              <Route path='setting' element={<Settings />} />

            </Route>
          </Route>
        </Routes>

      </center>
    </>
  )
}

export default App
