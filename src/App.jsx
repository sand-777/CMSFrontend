import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  const name = "Mansh"
  

  return (
    <>
     <BrowserRouter>
     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
      

     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
