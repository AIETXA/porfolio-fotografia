import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/login.css'

function AdminLogin() {
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const apiUrl = import.meta.env.VITE_API_URL;


const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const admin = formData.get('admin')
    const pass = formData.get('pass')

 
try {
    const res = await fetch(`${apiUrl}/auth/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ admin, pass })
    });

    if(!res.ok) {
        setMensaje('Credenciales erróneas');
        return;
    }
    const data = await res.json();
   

    login(data.token)
    navigate('/admin');

    } catch (err) {
    console.error(err);
    setMensaje('Error en el servidor');
    }
}


return (
    <div className='login-container'>
        <h2>Iniciar Sesión</h2>
      
        <form className='form-container' onSubmit={handleSubmit}>
            <input type="text" name="admin" placeholder="Usuario" required />
            <input type="password" name="pass" placeholder="Contraseña" required />
            <button className='btn-login' type="submit">Entrar</button>
        </form>
     {mensaje && <p className='message'>{mensaje}</p>}

    </div>
)

}

export default AdminLogin