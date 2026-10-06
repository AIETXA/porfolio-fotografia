import { Link } from "react-router-dom"
import './NavBar.css'
import { useEffect, useState, useRef } from 'react'
import { useTheme } from "../hooks/useTheme"


function NavBar() {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const navbar = useRef(null)
    
    const toggleBurger = () => {setMenuOpen(!menuOpen)}
    
    const { theme, toggleTheme } = useTheme();


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
        <nav ref={navbar} className={`navbar ${menuOpen ? 'active' : ''}`}>
            
            <button className="menu-burger" onClick={toggleBurger}>
                <span className="material-symbols-outlined">menu</span>
            </button>

        

            <Link to="/" className="logo"> 
                aietxa | photografy
            </Link> 
        

            <div className="nav-links">
                <Link to="/porfolio" className="nav-link">Portafolio</Link>
                <Link to="/about" className="nav-link">Sobre mi</Link>
                <Link to="/contact" className="nav-link">Contacto</Link>
            </div>


            <button onClick={toggleTheme}>
                {theme === 'light' ? '🌙 ' : '☀️'}
            </button>
    </nav>
    
    )
}

    
export default NavBar


