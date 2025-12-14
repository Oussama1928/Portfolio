import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

type Project = { id: number; name: string; tech: string[] }

type Props = {
  item: { id: number; title: string; period: string; description: string; projects: Project[] }
  isActive: boolean
  onClick: () => void
}

export default function TimelineItem({ item, isActive, onClick }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg" />

      <div
        onClick={onClick}
        className="cursor-pointer rounded-xl border border-white/10 p-6 hover:border-cyan-400 transition duration-300 hover:shadow-xl bg-gradient-to-b from-white/5 to-white/10"
      >
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p className="text-sm text-white/60">{item.period}</p>
        <p className="mt-2 text-white/80">{item.description}</p>

        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="mt-6 grid gap-4"
          >
            {item.projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
