
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import './Footer.css'




function Footer() {
    const [ isVisible, setIsVisible ] = useState(false);
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;
            const bodyHeight = document.documentElement.scrollHeight;

            if(windowHeight + scrollPosition >= bodyHeight - 10) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <footer className={`footer ${isVisible ? 'visible' : ''}`}>
            <div className="footer-text">
                <Link to="/" className="brand">Ailén Echaguibel</Link> 
        
                <p>&copy; 2026 Mi Sitio Web. Todos los derechos reservados.</p>

                {location.pathname === '/contact' ? (
                    <span className="phone-contact">
                        <FontAwesomeIcon icon={faPhone}/>+34685745445
                    </span>
                ) : (
                    <Link to="/contact" className="link">Contacto</Link>
                )
                }
            </div>
        </footer>
    )

}

export default Footer