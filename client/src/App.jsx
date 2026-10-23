
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { useLocation } from 'react-router-dom'
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
import EditPhotos from './components/EditPhotos.jsx'


function MainLayout() {
  const location = useLocation();
  
  const isPhotoDetail = location.pathname.startsWith('/photo/');

  return (
    <>
   
      {!isPhotoDetail && <NavBar />}
      
      <div className='app-container'>
          <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/about' element={<AboutMe/>} /> 
            <Route path='/gallery' element={<Gallery/>} /> 
            <Route path='/photo/:id' element={<Details/>}/>
            <Route path='/contact' element={<Contact/>} /> 
            
            <Route path='/admin/login' element={<AdminLogin/>}/>

            <Route element={<ProtectAdmin/>}>
              <Route path='/admin' element={<AdminPanel/>}/>
              <Route path='/admin/edit' element={<EditPhotos/>}/>
            </Route>
          </Routes>
      </div> 
  
      
      {!isPhotoDetail && <Footer />}
    </>
  );
}



function App() {


return (
    <AuthProvider>
      <Router>
        <MainLayout />
      </Router>
    </AuthProvider>
  )
}
export default App
