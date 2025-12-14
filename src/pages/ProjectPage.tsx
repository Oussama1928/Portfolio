import { useParams, useNavigate } from "react-router-dom"
import FullPageScroll from "../components/FullPageScroll"
import { motion } from "framer-motion"

const mockProjects: Record<number, { id: number; name: string; imageUrl: string }[]> = {
  1: [{ id: 101, name: "Personal Website", imageUrl: "/images/project1.jpg" }],
  2: [
    { id: 201, name: "Algorithm Visualizer", imageUrl: "/images/project2.jpg" },
    { id: 202, name: "Data Structures Practice", imageUrl: "/images/project3.jpg" }
  ],
  3: [{ id: 301, name: "Full-Stack Web App", imageUrl: "/images/project4.jpg" }]
}

export default function ProjectPage() {
  const { experienceId } = useParams()
  const navigate = useNavigate()
  const projects = experienceId ? mockProjects[parseInt(experienceId, 10)] || [] : []

  return (
    <FullPageScroll>
      {projects.map(project => (
        <motion.div
          key={project.id}
          className="relative w-full h-screen cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate(`/project/${project.id}`)}
        >
          <img src={project.imageUrl} alt={project.name} className="object-cover w-full h-full transition duration-500 hover:blur-sm" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-5xl font-bold text-white">{project.name}</h2>
          </div>
        </motion.div>
      ))}
    </FullPageScroll>
  )
}
