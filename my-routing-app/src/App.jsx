
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Mobiles from './pages/Mobiles'
import Fashion from './pages/Fashion'

function App() {
  return (
    <>
      <center>

        <h1>Welcome to My Routing App</h1>

        <Navbar/>

        <Routes>
              <Route path='/home' element={<Homepage/>}></Route>
              <Route path='/mobile' element={<Mobiles/>}></Route>
              <Route path='/fashion' element={<Fashion/>}></Route>
        </Routes>
      </center>



    </>
  )
}

export default App
