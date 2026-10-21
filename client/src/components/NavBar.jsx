import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect, useState, useRef } from 'react'
import { useTheme } from "../hooks/useTheme"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import logoClaro from '../assets/logo-claro.png'
import logoOscuro from '../assets/logo-oscuro.png'
import './NavBar.css'




function NavBar() {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ isScrolled, setIsScrolled ] = useState(false)
    const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 900)
    const navbar = useRef(null)
    const location = useLocation()
    const { scrollY } = useScroll()
    

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


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
                   <img src={theme === 'light' ? logoOscuro : logoClaro} alt="Logo-aietxa" />
                </Link> 
            

                <div className="nav-links">

                    <Link to="/gallery" className="nav-link">
                        <motion.span 
                            animate={{
                                y: isLinkActive('/gallery') && !isMobile ? 48 : 0,
                                scale: isLinkActive('/gallery') && !isMobile ? 1.5 : 1
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
                                y: isLinkActive ('/about') && !isMobile ? 48 : 0,
                                scale: isLinkActive ('/about') && !isMobile ? 1.5 : 1
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
                                y: isLinkActive ('/contact') && !isMobile ? 48 : 0,
                                scale: isLinkActive ('/contact') && !isMobile ? 1.5 : 1
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


