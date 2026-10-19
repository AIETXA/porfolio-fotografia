import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import photoRoutes from './routes/photoRoutes.js';

const server = express();
const PORT = process.env.PORT || 4000;

connectDB();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use('/api', photoRoutes);

server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});

export default server; 