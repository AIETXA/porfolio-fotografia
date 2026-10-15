import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect, useState, useRef } from 'react'
import { useTheme } from "../hooks/useTheme"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import './NavBar.css'




function NavBar() {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ isScrolled, setIsScrolled ] = useState(false)
    const navbar = useRef(null)
    const location = useLocation()
    const { scrollY } = useScroll()
    
    useMotionValueEvent(scrollY, 'change', (latest) => {
        if(latest > 25) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    })

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

    const isLinkActive = (path) => location.pathname === path && !isScrolled

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
                        <motion.span 
                            animate={{
                                y: isLinkActive('/galery') ? 48 : 0,
                                scale: isLinkActive('/galery') ? 1.5 : 1
                            }}
                            transition={{type: 'spring', stiffness: 200, damping: 25 }}
                            style={{ display: 'inline-block', fontSize: '300'}}
                        >
                            <span>Galeria</span>
                            <div className="nav-underline" />
                        </motion.span>
                    </Link> 

                    <Link to="/about" className="nav-link">
                        <motion.span
                            animate={{
                                y: isLinkActive ('/about') ? 48 : 0,
                                scale: isLinkActive ('/about') ? 1.5 : 1
                            }}
                            transition={{ type:'spring', stiffness: 200, damping: 25 }}
                            style={{ display: 'inline-block'}}
                        >
                            <span>Sobre mi</span>
                            <div className="nav-underline" />
                        </motion.span>
                        
                    </Link>

                    <Link to="/contact" className="nav-link">
                        <motion.span
                            animate={{
                                y: isLinkActive ('/contact') ? 48 : 0,
                                scale: isLinkActive ('/contact') ? 1.5 : 1
                            }}
                            transition={{ type:'spring', stiffness: 200, damping: 25 }}
                            style={{ display: 'inline-block'}}
                        >
                            <span>Contacto</span>
                            <div className="nav-underline" />
                        </motion.span>
                       
                    </Link>
                
                </div>


                <button className="btn-light-dark" onClick={toggleTheme}>
                    {theme === 'light' ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon} />}
                </button>
            </nav>
        
    
    )
}

    
export default NavBar


