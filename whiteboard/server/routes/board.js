import express from 'express';
import { getBoard, addProject, updateProject } from '../controllers/board.js'
const router = express.Router();

router.get('/', getBoard);
router.post('/', addProject);
router.patch('/:id', updateProject);

export default router;