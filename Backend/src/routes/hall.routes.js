import express from 'express';
import { getHalls, addHall, deleteHall } from '../controllers/hall.controllers.js';
import { protect } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.get('/', protect, getHalls);
router.post('/', protect, addHall);
router.delete('/:id', protect, deleteHall);

export default router;