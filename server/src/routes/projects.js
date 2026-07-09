import { Router } from 'express'
import Project from '../models/Project.js'
import { requireAdminKey } from '../middleware/requireAdminKey.js'

const router = Router()

router.get('/', async (req, res) => {
  const projects = await Project.find().sort({ order: 1, createdAt: -1 })
  res.json(projects)
})

router.post('/', requireAdminKey, async (req, res) => {
  const { title, description, bullets, period, location, tech, link, secondaryLink, order } = req.body
  if (!title || (!description && !(bullets && bullets.length))) {
    return res.status(400).json({ error: 'title and (description or bullets) are required' })
  }
  const project = await Project.create({
    title,
    description,
    bullets,
    period,
    location,
    tech,
    link,
    secondaryLink,
    order,
  })
  res.status(201).json(project)
})

export default router
