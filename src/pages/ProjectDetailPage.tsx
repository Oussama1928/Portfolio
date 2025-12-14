import { useParams } from "react-router-dom"

type ProjectType = { name: string; context: string; tech: string[]; github: string }

const mockProjectDetails: Record<number, ProjectType> = {
  101: { name: "Personal Website", context: "Created a portfolio website using HTML/CSS.", tech: ["HTML", "CSS"], github: "https://github.com/user/personal-website" },
  201: { name: "Algorithm Visualizer", context: "Visualized sorting algorithms.", tech: ["Python"], github: "#" },
  202: { name: "Data Structures Practice", context: "Solved complex data structure problems.", tech: ["C"], github: "#" },
  301: { name: "Full-Stack Web App", context: "Built full-stack app with React + FastAPI.", tech: ["React", "FastAPI"], github: "#" }
}

export default function ProjectDetailPage() {
  const { projectId } = useParams()
  const id = projectId ? parseInt(projectId, 10) : undefined
  const project = id ? mockProjectDetails[id] : null

  if (!project) return <p className="text-white p-6">Project not found</p>

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black/80 text-white p-6">
      <h1 className="text-5xl font-bold mb-4">{project.name}</h1>
      <p className="mb-4">{project.context}</p>
      <div className="flex gap-2 mb-4">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-1 rounded bg-cyan-400/20 text-cyan-400 text-sm">{t}</span>
        ))}
      </div>
      <a href={project.github} target="_blank" className="text-cyan-400 underline mt-4">GitHub</a>
    </div>
  )
}
