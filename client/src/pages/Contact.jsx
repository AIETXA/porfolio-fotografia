 import { useState } from 'react'
 import emailjs from '@emailjs/browser'
 import '../styles/contact.css'

 
 function Contact() {
    const [ formData, setFormData ] = useState({
      name: '',
      lastname: '',
      phone: '',
      email: '',
      message: ''
    });

    const [ status, setStatus ] = useState('');
    const [ statusType, setStatusType ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({...prevData, [name] : value}))
      };

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      
    const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const API_KEYS =  import.meta.env.VITE_EMAIL_API_KEYS;

    emailjs.send(
      SERVICE_ID, TEMPLATE_ID, {
        from_name: `${formData.name} ${formData.lastname}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      API_KEYS
    )
    .then(() => {
      setStatus('Mensaje enviado con éxito');
      setFormData({ name: '', lastname: '', email: '', phone: '', message: ''});
      setStatusType('success');
    })
    .catch((error) => {
      console.error('Error al enviar el mensaje', error);
      setStatus('Se produjo un error al enviar el mensaje. Intentá de nuevo');
      setStatusType('error');
    }) 
    .finally(() => {
      setLoading(false)
    });

    }

     return (
 
        <div className="contact-container">
        
          <form className="form" onSubmit={handleSubmit}>

           <div className="form-group-fullname">
             <input 
                type="text" 
                name="name" 
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={handleChange} 
                required
              />
             
             <input 
                type="text" 
                name="lastname" 
                placeholder="Tu Apellido"
                value={formData.lastname}
                onChange={handleChange} 
                required
              />
             
           </div>

           

           <div className="form-group-contact">
             <input 
                type="phone" 
                name="phone" 
                placeholder="Tu teléfono"
                value={formData.phone}
                onChange={handleChange} 
                required
              />
             
             <input 
                type="email" 
                name="email" 
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            
           </div>


           <div className="form-group">
             <textarea 
                name="message" 
                id="message" 
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            
           </div>

           <div className="spacer10"></div>

           <div className="centered-btn-wrapper">
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
           </div>

            {status && 
            <p className={`form-status ${statusType}`}>
              {status}
            </p>}
          
          </form>
        
        </div>
         
    
      )
    }
   
    export default Contact