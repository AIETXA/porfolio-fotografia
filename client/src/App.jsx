
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'


import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Galery from './pages/Galery.jsx'
import AdminLogin from './pages/Login.jsx'
import ProtectAdmin from './components/ProtectedRoute.jsx'
import AdminPanel from './components/AdminPanel.jsx'



function App() {
  return (
    <Router>
      <NavBar/>
      
        <div className='app-container'>
            <Routes>
              <Route path='/' element={<Home/>} /> 
              <Route path='/about' element={<AboutMe/>} /> 
              <Route path='/galery' element={<Galery/>} /> 
              <Route path='/contact' element={<Contact/>} /> 

              <Route path='/admin/login' element={<AdminLogin/>}/>


              <Route element={<ProtectAdmin/>}/>
                <Route path='/admin' element={<AdminPanel/>}/>

                
            </Routes>

        </div> 
     
    <Footer/>
    </Router>
  )
}

export default App
