import {Router} from 'express';
import {create, getAll, remove, update,getOne} from '../controllers/song.controller';

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getOne);
router.put('/', update);
router.delete('/:id', remove);

export default router;