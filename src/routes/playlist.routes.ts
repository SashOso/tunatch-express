import express from 'express';
import {PlaylistController} from '../controllers/playlist.controller';

const router = express.Router();

router.post('/', PlaylistController.create);
router.get('/', PlaylistController.getAll);
router.get('/:id', PlaylistController.getOne);
router.put('/', PlaylistController.update);
router.delete('/:id', PlaylistController.delete);

export default router;