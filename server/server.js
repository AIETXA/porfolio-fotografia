import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import photoRoutes from './routes/photoRoutes.js';
import authRoutes from './routes/authRoutes.js'

const server = express();
const PORT = process.env.PORT || 4000;

connectDB();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use('/api', photoRoutes);
server.use('/api/auth', authRoutes);

const startServer = async () => {
    try {
        await connectDB(); 
        server.listen(PORT, '0.0.0.0', () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('No se pudo iniciar el servidor debido a un fallo en la BD');
    }
};

startServer();


export default server; 