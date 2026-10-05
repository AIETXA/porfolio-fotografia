
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Porfolio from './pages/Porfolio.jsx'
import AdminLogin from './pages/Login.jsx'
import ProtectAdmin from './components/ProtectedRoute.jsx'


function App() {
 

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/about' element={<AboutMe/>} /> 
        <Route path='/porfolio' element={<Porfolio/>} /> 
        <Route path='/contact' element={<Contact/>} /> 

        <Route path='/admin/login' element={<AdminLogin/>}/>


        <Route element={<ProtectAdmin/>}/>
          <Route path='/admin' element={<h1>admin panel</h1>}/>

          
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
