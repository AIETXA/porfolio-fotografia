
import jwt from'jsonwebtoken';


export const procesarLogin = (req, res) => {
    const { admin, pass } = req.body;

    const validarAdmin = process.env.AUTH_ADMIN;
    const validarPass = process.env.AUTH_PASS;
    const tokenSecret = process.env.JWT_SECRET;



  
if (admin === validarAdmin && pass === validarPass) {
    const token = jwt.sign({admin: admin}, tokenSecret, {expiresIn:'1h'} );
    
    return res.json({
        success: true,
        token,
        message: 'Inicio de sesión exitoso'
    });
  }

res.status(401).json({
    success: false,
    message:'Credenciales incorrectas'});
};


 