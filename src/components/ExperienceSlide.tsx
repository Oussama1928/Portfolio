import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

type Experience = {
  id: number
  title: string
  period: string
  description: string
  imageUrl: string
}

export default function ExperienceSlide({ experience }: { experience: Experience }) {
  const navigate = useNavigate()

  return (
    <motion.div
      className="relative w-full h-screen cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={() => navigate(`/projects/${experience.id}`)}
    >
      <img
        src={experience.imageUrl}
        alt={experience.title}
        className="object-cover w-full h-full transition duration-500 hover:blur-sm"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-bold text-white">{experience.title}</h2>
        <p className="mt-4 text-white/80">{experience.period}</p>
        <p className="mt-2 text-white/70">{experience.description}</p>
      </div>
    </motion.div>
  )
}
