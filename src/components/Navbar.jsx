import { Link } from "react-router-dom"
import './Navbar.css'
import { useEffect, useState, useRef } from 'react'


function NavBar() {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const navbar = useRef(null)

    const burguer = () => {
        setMenuOpen(!menuOpen)
    }

useEffect(() => {
    const handleClick = (e) => {
       if(navbar.current && !navbar.current.contains(e.target)) {
        setMenuOpen(false)
       } 
    }
    document.addEventListener('mousedown', handleClick)

    return() => {
        document.removeEventListener('mousedown', handleClick)
    }
},[])

    return (

    <div ref={navbar} className={`navbar ${menuOpen ? 'active' : ''}`}>
            <Link to="/" className="toggle" id="navHamb">
                <span onClick={burguer} className="material-symbols-outlined">menu</span>

            </Link>
        

            <Link to="/" className="brand">Ailén Echaguibel</Link> 
        

        <div className="links">
            <Link to="/porfolio" className="link">Portafolio</Link>
            <Link to="/me" className="link">Sobre mi</Link>
        </div>

        <div className="link-contact">
            <Link to="/contact" className="link">Contacto</Link>
        </div>
    </div>
    
    )
}

    
export default NavBar


