import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import type { TimelineEvent } from "@/components/lightswind/scroll-timeline";

const journeyEvents: TimelineEvent[] = [
  {
    year: "2016 - 2020",
    title: "Mathematics & Physics Student",
    subtitle: "Pioneer School, Tunisia",
    description: "During these years, I studied advanced mathematics and physics while also starting to explore software development. I successfully passed my Baccalauréat with an outstanding score of 18.63/20."
  },
  {
    year: "2020 - 2022",
    title: "Preparatory School Student",
    subtitle: "IPEST, Tunisia",
    description: "I enrolled in intensive preparatory classes focusing on mathematics, physics, computer science, and artificial intelligence. I successfully passed the Mines Ponts competitive exams, preparing me for engineering school admission."
  },
  {
    year: "2022 - 2025",
    title: "Engineering Student",
    subtitle: "IMT Atlantique, France",
    description: "At IMT Atlantique, one of the top engineering schools in France, I specialized in software engineering, covering a wide range of lessons in programming, cloud computing, artificial intelligence, and big data."
  },
  {
    year: "2024",
    title: "Fullstack Engineer Intern",
    subtitle: "Fives Stein",
    description: "During my internship, I developed a C++ security library with unit tests using Google Test. I contributed to designing the HMI architecture, participated in code reviews, and developed new features in C# and .NET."
  },
  {
    year: "2025",
    title: "Backend Engineer Intern",
    subtitle: "EDF",
    description: "I worked on migrating the backend from Django to Java Spring, redesigned the architecture, and optimized REST APIs for performance and scalability. I implemented unit testing with JUnit and Mockito, managed code coverage via JaCoCo, deployed a CI/CD pipeline with GitLab, updated the frontend in TypeScript and Vue.js, and leveraged Redis for caching to improve performance."
  },
];

export default function Journey() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-sans bg-background text-white">
      <ScrollTimeline
        events={journeyEvents}
        title="My Journey"
        subtitle="Scroll down to explore my professional and academic path"
        progressIndicator={true}
        cardAlignment="alternating"
        revealAnimation="fade"
        lineColor="bg-white/20"
        activeColor="bg-pink-400"
        cardEffect="glow"
        parallaxIntensity={0.1}
        progressLineWidth={4}
        connectorStyle="line"
      />
    </section>
  );
}
