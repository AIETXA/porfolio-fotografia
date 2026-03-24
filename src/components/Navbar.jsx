import { Link } from "react-router-dom"
import { useState } from 'react'

function NavBar() {
    return (

        <div className="navbar">
            <Link to="/" className="toggle" id="navHamb">
                <span className="material-symbols-outlined">menu</span>
            </Link>
        

            <Link to="/" className="brand">Ailén Echaguibel</Link> 
        

        <div className="links">
            <Link to="/porfolio" className="porfolio">Portafolio</Link>
            <Link to="/me" className="sobremi">Sobre mi</Link>
        </div>

        <div className="link-contact">
            <Link to="/contact" className="contact">Contacto</Link>
        </div>
    </div>
    
    )
}

    
export default NavBar

