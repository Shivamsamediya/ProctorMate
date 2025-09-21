import express from 'express';
import { getTeachers, addTeacher, deleteTeacher } from '../controllers/teacher.controllers.js';
import { protect } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.get('/', protect, getTeachers);
router.post('/', protect, addTeacher);
router.delete('/:id', protect, deleteTeacher);

export default router;