import express from 'express';
import {AlbumController} from '../controllers/album.controller';

const router = express.Router();

router.post('/', AlbumController.create);
router.get('/', AlbumController.getAll);
router.get('/:id', AlbumController.getOne);
router.put('/', AlbumController.update);
router.delete('/:id', AlbumController.delete);

export default router;