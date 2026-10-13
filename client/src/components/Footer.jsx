
import { Link } from "react-router-dom";
import './Footer.css'
import { useEffect, useState } from "react";


function Footer() {
    const [ isVisible, setIsVisible ] = useState(false);

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

                <Link to="/contact" className="link">Contacto</Link>
            </div>
        </footer>
    )

}

export default Footer