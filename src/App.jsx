
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Porfolio from './pages/Portfolio'
import NavBar from './components/Navbar'

function App() {
 

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/me' element={<AboutMe/>} /> 
        <Route path='/porfolio' element={<Porfolio/>} /> 
        <Route path='/contact' element={<Contact/>} /> 


      </Routes>
    </Router>
  )
}

export default App
