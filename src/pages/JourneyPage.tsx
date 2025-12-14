import FullPageScroll from "../components/FullPageScroll"
import ExperienceSlide from "../components/ExperienceSlide"

const experiences = [
  { id: 1, title: "High School", period: "2018 – 2020", description: "Math, logic, problem solving.", imageUrl: "/images/highschool.jpg" },
  { id: 2, title: "Preparatory School", period: "2020 – 2022", description: "Algorithms intensive.", imageUrl: "/images/prepa.jpg" },
  { id: 3, title: "Engineering School", period: "2022 – Present", description: "Full-stack & software.", imageUrl: "/images/engineering.jpg" },
]

export default function JourneyPage() {
  return (
    <FullPageScroll transitionDuration={700} showDots={true}>
      {experiences.map(exp => (
        <ExperienceSlide key={exp.id} experience={exp} />
      ))}
    </FullPageScroll>
  )
}
