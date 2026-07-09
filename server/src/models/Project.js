import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    bullets: [{ type: String }],
    period: { type: String },
    location: { type: String },
    tech: [{ type: String }],
    link: { type: String },
    secondaryLink: {
      label: { type: String },
      url: { type: String },
    },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export default mongoose.model('Project', projectSchema)
