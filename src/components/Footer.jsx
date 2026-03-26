
import { Link } from "react-router-dom";

function Footer() {

    return (
        <div className="footer">
            <Link to="/" className="brand">Ailén Echaguibel</Link> 
      
            <p>&copy; 2026 Mi Sitio Web. Todos los derechos reservados.</p>

            <Link to="/contact" className="link">Contacto</Link>
        </div>
    )

}

export default Footer