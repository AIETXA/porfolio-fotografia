import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import './NavBar.css'
import { useEffect, useState, useRef } from 'react'
import { useTheme } from "../hooks/useTheme"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons"


const MotionLink = motion(Link);


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
                    <Link to="/galery" className="nav-link">
                        Galeria
                    </Link> 

                    <Link to="/about" className="nav-link">
                        Sobre mi
                    </Link>

                    <Link to="/contact" className="nav-link">
                        Contacto
                    </Link>
                
                </div>


                <button className="btn-light-dark" onClick={toggleTheme}>
                    {theme === 'light' ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon} />}
                </button>
            </nav>
        
    
    )
}

    
export default NavBar


