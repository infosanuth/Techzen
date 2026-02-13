import express from 'express'
import { registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'

const router = express.Router()

// Register a company
router.post('/register', upload.single('image'), registerCompany)

export default router