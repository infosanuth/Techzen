import express from 'express'
import { getJobs } from '../controllers/jobController.js';

const router = express.Router()

// Route to get all jobs data
router.get('/',getJobs)

export default router;