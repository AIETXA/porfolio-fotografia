import { Router, Router } from 'express';
import { uploadPhoto, getAllPhotos, deletePhoto } from "../controllers/photoController";
import { upload } from 'multer';

const router = Router();

router.post('/photos', upload.single('image'), uploadPhoto);
router.get('/photos', getAllPhotos);
router.delete('/photos:id', deletePhoto);


export default router;