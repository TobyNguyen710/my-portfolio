import { Router } from 'express'
import Message from '../models/Message.js'

const router = Router()
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

router.post('/', async (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' })
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }
  const saved = await Message.create({ name, email, message })
  res.status(201).json({ id: saved._id })
})

export default router
