import express from 'express'
import { procesarLogin } from "../controllers/authController.js";

const router = express.Router();

router.post('/admin/login', procesarLogin);

export default router;