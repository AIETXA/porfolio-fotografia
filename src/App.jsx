
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Porfolio from './pages/Porfolio.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

function App() {
 

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/about' element={<AboutMe/>} /> 
        <Route path='/porfolio' element={<Porfolio/>} /> 
        <Route path='/contact' element={<Contact/>} /> 
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
