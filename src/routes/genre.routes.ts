import express from 'express';
import {GenreController} from '../controllers/genre.controller';

const router = express.Router();

router.post('/', GenreController.create);
router.get('/', GenreController.getAll);
router.get('/:id', GenreController.getOne);
router.put('/', GenreController.update);
router.delete('/:id', GenreController.delete);

export default router;