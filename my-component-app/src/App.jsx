
import './App.css'
import Clothing from './components/Clothing';
import Home from './components/Home';
import Mobiles from './components/Mobiles';
import Welcome from './components/Welcome';
import Demo from './Demo'

function App() {

  let name = "Tejas";

  let a = 3;
  let b = 5;
  let add = a + b;



  return (
    <>
      <h1>Root Component (App.jsx)</h1>

      <h1>Hello Welcome {name} </h1>

      <h2>Sum = {add}</h2>

      <Demo />

      <Welcome />

      <Home />
      <Mobiles />
      <Clothing />

    </>
  )
}

export default App
