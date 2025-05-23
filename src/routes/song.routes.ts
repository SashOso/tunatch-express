import express from 'express';
import {SongController} from '../controllers/song.controller';

const router = express.Router();

router.post('/', SongController.create);
router.get('/', SongController.getAll);
router.get('/:id', SongController.getOne);
router.put('/', SongController.update);
router.delete('/:id', SongController.delete);

export default router;