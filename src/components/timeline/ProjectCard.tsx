import { motion } from "framer-motion"

type Props = { project: { id: number; name: string; tech: string[] } }

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-lg bg-white/5 p-4 border border-white/10 cursor-pointer hover:shadow-2xl"
    >
      <h3 className="font-medium">{project.name}</h3>
      <div className="flex gap-2 mt-2 flex-wrap">
        {project.tech.map(tech => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
