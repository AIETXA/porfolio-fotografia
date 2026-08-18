import { Link } from "react-router-dom"
import './NavBar.css'
import { useEffect, useState, useRef } from 'react'


function NavBar() {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const navbar = useRef(null)

    const toggleBurger = () => {setMenuOpen(!menuOpen)}

    useEffect(() => {
        const handleClickOutside = (e) => {
        if(navbar.current && !navbar.current.contains(e.target)) {
            setMenuOpen(false)
        } 
        }
        document.addEventListener('mousedown', handleClickOutside)

        return() => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[])

    return (

    <div ref={navbar} className={`navbar ${menuOpen ? 'active' : ''}`}>
            <Link to="/" className="toggle" onClick={toggleBurger}>
                <span className="material-symbols-outlined">menu</span>

            </Link>
        

            <Link to="/" className="brand">Ailén Echaguibel</Link> 
        

        <div className="links">
            <Link to="/porfolio" className="link">Portafolio</Link>
            <Link to="/about-me" className="link">Sobre mi</Link>
        </div>

        <div className="link-contact">
            <Link to="/contact" className="link">Contacto</Link>
        </div>
    </div>
    
    )
}

    
export default NavBar


