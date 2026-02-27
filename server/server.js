import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkWebhook } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import jobRoutes from './routes/jobRoutes.js'
import {clerkMiddleware } from '@clerk/express'
import userRoutes from './routes/userRoutes.js'


// Initialize Express
const app = express()

// Connect to database
await connectDB()
await connectCloudinary()

app.post(
  '/webhooks',
  express.raw({ type: 'application/json' }),
  clerkWebhook
)


// Middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.use('/api/company', companyRoutes)
app.use('/api/jobs', jobRoutes)
app.use('api/users',userRoutes)


// Route
app.get('/', (req, res) => res.send("API Working"))


// Port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})