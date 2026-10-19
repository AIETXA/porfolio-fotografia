import { Router } from 'express';
import { uploadPhoto, getAllPhotos, getPhotoById, updatePhoto, deletePhoto } from "../controllers/photoController.js";
import { upload } from '../middlewares/multer.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/photos', getAllPhotos);
router.get('/photos/:id', getPhotoById);

router.post('/photos', authMiddleware, upload.single('image'), uploadPhoto);
router.put('/photos/:id', authMiddleware, updatePhoto);
router.delete('/photos/:id', authMiddleware, deletePhoto);


export default router;