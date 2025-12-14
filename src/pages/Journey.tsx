import Timeline from "../components/timeline/Timeline"

const journeyData = [
  {
    id: 1,
    title: "Pioneer School",
    period: "2016 – 2020",
    description: "First contact with logic, math and problem solving.",
    projects: [
      { id: 1, name: "Personal Website", tech: ["HTML", "CSS"] },
    ],
  },
  {
    id: 2,
    title: "Preparatory School",
    period: "2020 – 2022",
    description: "Intensive training in algorithms and mathematics.",
    projects: [
      { id: 2, name: "Artificial Neural Network Project", tech: ["Python, TensorFlow, Pandas, Scikit-Learn"] },
    ],
  },
  {
    id: 3,
    title: "Engineering School",
    period: "2022 – 2025",
    description: "Software engineering, Cloud engineering.",
    projects: [
      { id: 3, name: "Petri Net Project", tech: ["Java", "UML", "JUnit", "Git"] },
      { id: 4, name: "Ecosystem Simulation", tech: ["C++", "Git"] },
      { id: 5, name: "Web Application Development", tech: ["PHP", "Symfony", "Bootstrap"] },
      { id: 6, name: "Music Streaming Application", tech: ["React", "Express.js", "WebSockets", "Tailwind css", "Git", "SQL"] },
      { id: 7, name: "Microservices Application", tech: ["Distributed Systems", "Flask", "TypeScript", "Docker", "GCP", "Kubernetes", "Terraform", "REST API", "GraphQL", "gRPC"] },
      { id: 8, name: "Big Data Project", tech: ["Elastic Search", "Kibana"] },
    ],
  },
]

export default function Journey() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-16 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-900/20 before:to-cyan-900/20 before:-z-10">
    <h1 className="text-4xl font-bold mb-12 text-white/90">My Journey</h1>
    <Timeline items={journeyData} />
    </section>
  )
}
