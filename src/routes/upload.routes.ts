import {Router} from 'express';
import { upload } from '../config/multer';
import { uploadController } from '../controllers/upload.controller';

const router = Router();

router.post('/song/media', upload.single('media'), uploadController);
router.post('/song/image', upload.single('image'), uploadController);
router.post('/song/media/:name', upload.single('media'), uploadController);
router.post('/song/image/:name', upload.single('image'), uploadController);

router.post('/artist/image', upload.single('image'), uploadController);
router.post('/artist/image/:name', upload.single('image'), uploadController);

router.post('/album/image', upload.single('image'), uploadController);
router.post('/album/image/:name', upload.single('image'), uploadController);

router.post('/user/image', upload.single('image'), uploadController);
router.post('/user/image/:name', upload.single('image'), uploadController);
export default router;