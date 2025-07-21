import express from 'express';
import { creatUser, getUsers, getUser, deleteUser, patchUser } from '../controllers/users.js';
const router = express.Router();

//all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', creatUser);

router.get('/:id', getUser)

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);
export default router;

