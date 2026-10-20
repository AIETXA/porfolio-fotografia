
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'


import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Gallery from './pages/Gallery.jsx'
import AdminLogin from './pages/Login.jsx'
import Details from './pages/Details.jsx'
import ProtectAdmin from './components/ProtectedRoute.jsx'
import AdminPanel from './components/AdminPanel.jsx'

const photosFalsas = [
  { 
    id: '1', 
    title: 'Paisaje 1', 
    category: 'landscapes', 
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800' 
  },
  { 
    id: '2', 
    title: 'Retrato 1', 
    category: 'portraits', 
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800' 
  },
  { 
    id: '3', 
    title: 'Paisaje 2', 
    category: 'landscapes', 
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800' 
  }
];

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar/>
        
          <div className='app-container'>
              <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/about' element={<AboutMe/>} /> 
                <Route path='/gallery' element={<Gallery photos={photosFalsas}/>} /> 
                <Route path='/photo/:id' element={<Details photos={photosFalsas}/>}/>
                <Route path='/contact' element={<Contact/>} /> 
                
                <Route path='/admin/login' element={<AdminLogin/>}/>


                <Route element={<ProtectAdmin/>}>
                  <Route path='/admin' element={<AdminPanel/>}/>
                </Route>
                  
              </Routes>

          </div> 
      
        <Footer/>
      </Router>
    </AuthProvider>
  )
}

export default App
