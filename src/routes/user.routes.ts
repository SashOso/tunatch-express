import express from 'express';
import {UserController} from '../controllers/user.controller';

const router = express.Router();

router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.put('/', UserController.update);
router.delete('/:id', UserController.delete);

export default router;