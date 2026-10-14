 import '../styles/contact.css'
 import { motion } from 'framer-motion'
 
 function Contact() {
     return (
 
        <div className="contact-container">
        
          <div className="heading-wrapper">
            <motion.h1 layoutId="contact-shared-title">Contacto</motion.h1>
          </div>
          
          <div className="form">

           <div className="form-group">
             <input type="text" name="fullname" placeholder="Tu nombre" />
             <label htmlFor="fullname"></label>
           </div>

           <div className="form-group">
             <input type="email" name="email" placeholder="Tu email" />
             <label htmlFor="email"></label>
           </div>

           <div className="form-group">
             <textarea name="message" id="message" placeholder="Mensaje"></textarea>
             <label htmlFor="message"></label>
           </div>

           <div className="spacer10"></div>

           <div className="centered-btn-wrapper">
             <button type="submit" className="btn">Enviar</button>
           </div>

         </div>
         
        </div>
    
      )
    }
   
    export default Contact