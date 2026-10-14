 import '../styles/contact.css'
 import { motion } from 'framer-motion'
 
 function Contact() {
     return (
 
        <div className="contact-container">
        
          <div className="heading-wrapper">
           
          </div>
          
          <div className="form">

           <div className="form-group-fullname">
             <input type="text" name="name" placeholder="Tu Nombre" />
             <label htmlFor="name"></label>
             <input type="text" name="lastname" placeholder="Tu Apellido" />
             <label htmlFor="lastname"></label>
           </div>

           

           <div className="form-group-contact">
             <input type="phone" name="phone" placeholder="Tu teléfono" />
             <label htmlFor="phone"></label>
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