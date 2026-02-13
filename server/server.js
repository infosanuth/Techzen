import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkWebhook } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'


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

app.use('/api/company', companyRoutes)


// Route
app.get('/', (req, res) => res.send("API Working"))


// Port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})