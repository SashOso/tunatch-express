import express from 'express';
import {RoleController} from '../controllers/role.controller';

const router = express.Router();

router.post('/', RoleController.create);
router.get('/', RoleController.getAll);
router.get('/:id', RoleController.getOne);
router.put('/', RoleController.update);
router.delete('/:id', RoleController.delete);

export default router;