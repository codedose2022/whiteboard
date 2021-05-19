import express from 'express';
import { getBoard, addProject, updateProject, deletePost } from '../controllers/board.js'
const router = express.Router();

router.get('/', getBoard);
router.post('/', addProject);
router.patch('/:id', updateProject);
router.delete('/:id', deletePost);

export default router;