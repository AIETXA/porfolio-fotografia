import 'dotenv/config';
import express from 'express';
import photoRoutes from './routes/photoRoutes';

const server = express();

server.use(express.json());
server.use(urlencoded({ extended:true}));

server.use('/api', photoRoutes);

export default server; 