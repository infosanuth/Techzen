import express from 'express'
import { registerCompany, loginCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'

const router = express.Router()

// Register a company
router.post('/register', upload.single('image'), registerCompany)

// Company login
router.post('/login', loginCompany)

export default router