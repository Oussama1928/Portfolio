import { SeasonalHoverCards } from "@/components/lightswind/seasonal-hover-cards";

export default function Projects() {
  const projects = [
    {
      title: "Backend Migration",
      subtitle: "Java · SpringBoot · REST · SQL · GitLab CI/CD",
      description:
        "Migrated a production backend from Django to Java Spring, redesigned the architecture for scalability, optimized REST APIs, implemented unit testing with JUnit and Mockito, and improved performance using Redis caching and efficient data structures.",
      imageSrc: "/images/projects/edf.jpg",
    },
    {
      title: "HMI Design and Development",
      subtitle: "C++ · C# · .NET · Git",
      description:
        "Developed a C++ security library with unit tests using Google Test, designed HMI architecture, participated in code reviews, and implemented new features in C# and .NET within an industrial software environment.",
      imageSrc: "/images/projects/fives.jpg",
    },
    {
      title: "Cloud-Native Microservices Platform",
      subtitle: "TypeScript · Flask · REST · gRPC · GraphQL",
      description:
        "Built a cloud-native platform composed of multiple microservices exposing REST, gRPC, and GraphQL APIs. Deployed behind an API Gateway with load balancing and rate limiting, documented APIs with OpenAPI, and automated CI/CD pipelines via GitLab.",
      imageSrc: "/images/projects/microservices.jpg",
    },
    {
      title: "Kubernetes Deployment on GCP",
      subtitle: "Docker · Kubernetes · Terraform · GCP",
      description:
        "Containerized services using Docker, orchestrated deployments with Kubernetes, and provisioned cloud infrastructure on Google Cloud Platform using Terraform, following Infrastructure as Code best practices.",
      imageSrc: "/images/projects/kubernetes.jpg",
    },
    {
      title: "Real-Time Web Application",
      subtitle: "React · TypeScript · Express · WebSockets",
      description:
        "Developed a real-time web application with WebSockets for live broadcasting and playlist management, including a recommendation system. Built a modern frontend with React, Tailwind CSS, and secure user authentication.",
      imageSrc: "/images/projects/webapp.jpg",
    },
    {
      title: "Object-Oriented Programming",
      subtitle: "Java · C++ · UML · Design Patterns · JUnit",
      description:
        "Designed UML diagrams, implemented relevant Design Patterns, collaborated effectively using Git, and ensured quality via unit testing (JUnit).",
      imageSrc: "/images/projects/java.jpg",
    },
    {
      title: "PHP Web Application",
      subtitle: "PHP · Symfony · Bootstrap",
      description:
        "Developed a web application in PHP with Symfony allowing authors to submit articles and manage content, and designed separate views for admin and user roles, with authentication and role-based access control.",
      imageSrc: "/images/projects/php.jpg",
    },
    {
      title: "Elasticsearch Analytics Platform",
      subtitle: "Elasticsearch · Kibana",
      description:
        "Designed Elasticsearch index mappings, optimized complex search queries and aggregations, and built visualization dashboards in Kibana to analyze and monitor structured datasets.",
      imageSrc: "/images/projects/elasticsearch.jpg",
    },
    {
      title: "Air Pollution Estimation with Neural Networks",
      subtitle: "Neural Networks · Python · TensorFlow · Pandas",
      description:
        "Independently studied artificial neural networks, built and optimized a prediction model, and trained it on air pollution data collected in Paris to estimate pollution levels.",
      imageSrc: "/images/projects/ai.jpg",
    },
  ];

  const projectGroups = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectGroups.push(projects.slice(i, i + 3));
  }

  return (
    <section className="relative w-full min-h-screen bg-background text-white pb-24 px-6 md:px-12 font-sans">
      {/* Title */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Projects
        </h1>
        <p className="text-lg text-white/70 max-w-2xl">
          A selection of academic, professional, and personal projects showcasing
          my experience in backend engineering, cloud-native systems, and full-stack
          development.
        </p>
      </div>

      {/* Rows of 3 cards */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {projectGroups.map((group, index) => (
          <SeasonalHoverCards key={index} cards={group} />
        ))}
      </div>
    </section>
  );
}
