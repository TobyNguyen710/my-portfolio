import { Router } from 'express'
import Project from '../models/Project.js'
import { requireAdminKey } from '../middleware/requireAdminKey.js'

const router = Router()

router.get('/', async (req, res) => {
  const projects = await Project.find().sort({ order: 1, createdAt: -1 })
  res.json(projects)
})

router.post('/', requireAdminKey, async (req, res) => {
  const { title, description, tech, link, order } = req.body
  if (!title || !description) {
    return res.status(400).json({ error: 'title and description are required' })
  }
  const project = await Project.create({ title, description, tech, link, order })
  res.status(201).json(project)
})

export default router
