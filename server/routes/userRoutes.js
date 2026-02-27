import express from 'express'
import { applyForJob, getUserData, getUserJobApplication, updateUserResume } from '../controllers/userController.js'

const router = express.Router()

// Get user data
router.get('/user', getUserData)

// Apply for a job
router.post('/apply', applyForJob)


export default router