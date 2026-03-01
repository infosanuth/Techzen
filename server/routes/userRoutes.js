import express from 'express'
import { applyForJob, getUserData, getUserJobApplication} from '../controllers/userController.js'

const router = express.Router()

// Get user data
router.get('/user', getUserData)

// Apply for a job
router.post('/apply', applyForJob)

// Get applied jobs data
router.get('/applications', getUserJobApplication)

export default router