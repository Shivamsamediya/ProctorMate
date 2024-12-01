import express from 'express';
import { allocateTeachers, getAllocations, deleteAllocations } from '../controllers/allocations.controllers.js';
import { protect } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/allocate', protect, allocateTeachers);

router.get('/allocations', protect, getAllocations);

router.delete('/allocations',protect, deleteAllocations);

export default router;
