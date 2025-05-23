import express from 'express';
import {ArtistController} from '../controllers/artist.controller';

const router = express.Router();

router.post('/', ArtistController.create);
router.get('/', ArtistController.getAll);
router.get('/:id', ArtistController.getOne);
router.put('/', ArtistController.update);
router.delete('/:id', ArtistController.delete);

export default router;