import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import projectsRouter from './routes/projects.js'
import contactRouter from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 5000

const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(',').map((url) => url.trim())
  : '*'
app.use(cors({ origin: allowedOrigins }))
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/projects', projectsRouter)
app.use('/api/contact', contactRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err)
    process.exit(1)
  })
