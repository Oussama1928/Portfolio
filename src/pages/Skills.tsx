import { LogoLoop } from "../components/ui/LogoLoop";
import type { LogoItem } from "../components/ui/LogoLoop";
import {
  SiPython,
  SiOpenjdk,
  SiSpringboot,
  SiCplusplus,
  SiSharp,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGooglecloud,
  SiOpenstack,
  SiKibana,
  SiPrometheus,
  SiGrafana,
  SiApachehadoop,
  SiApachespark,
  SiApachekafka,
  SiElasticsearch,
  SiMysql,
  SiPostgresql,
  SiMariadb,
  SiMongodb,
  SiNeo4J,
  SiRedis,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn
} from "react-icons/si";

export default function SkillsPage() {
  const programmingLogos: LogoItem[] = [
    { node: <SiPython className="text-[48px]" />, title: "Python" },
    { node: <SiOpenjdk className="text-[48px]" />, title: "Java" },
    { node: <SiSpringboot className="text-[48px]" />, title: "SpringBoot" },
    { node: <SiCplusplus className="text-[48px]" />, title: "C++" },
    { node: <SiSharp className="text-[48px]" />, title: "C#" },
    { node: <SiJavascript className="text-[48px]" />, title: "JavaScript" },
    { node: <SiTypescript className="text-[48px]" />, title: "TypeScript" },
    { node: <SiVuedotjs className="text-[48px]" />, title: "Vue.js" },
    { node: <SiReact className="text-[48px]" />, title: "React.js" },
    { node: <SiTailwindcss className="text-[48px]" />, title: "Tailwind CSS" },
  ];

  const devopsLogos: LogoItem[] = [
    { node: <SiGit className="text-[48px]" />, title: "Git" },
    { node: <SiDocker className="text-[48px]" />, title: "Docker" },
    { node: <SiKubernetes className="text-[48px]" />, title: "Kubernetes" },
    { node: <SiTerraform className="text-[48px]" />, title: "Terraform" },
    { node: <SiGooglecloud className="text-[48px]" />, title: "Google Cloud" },
    { node: <SiOpenstack className="text-[48px]" />, title: "OpenStack" },
  ];

  const monitoringLogos: LogoItem[] = [
    { node: <SiKibana className="text-[48px]" />, title: "Kibana" },
    { node: <SiPrometheus className="text-[48px]" />, title: "Prometheus" },
    { node: <SiGrafana className="text-[48px]" />, title: "Grafana" },
  ];

  const bigDataLogos: LogoItem[] = [
    { node: <SiApachehadoop className="text-[48px]" />, title: "Hadoop" },
    { node: <SiApachespark className="text-[48px]" />, title: "Spark" },
    { node: <SiApachekafka className="text-[48px]" />, title: "Kafka" },
    { node: <SiElasticsearch className="text-[48px]" />, title: "Elasticsearch" },
  ];

  const databaseLogos: LogoItem[] = [
    { node: <SiMysql className="text-[48px]" />, title: "MySQL" },
    { node: <SiPostgresql className="text-[48px]" />, title: "PostgreSQL" },
    { node: <SiMariadb className="text-[48px]" />, title: "MariaDB" },
    { node: <SiMongodb className="text-[48px]" />, title: "MongoDB" },
    { node: <SiNeo4J className="text-[48px]" />, title: "Neo4j" },
    { node: <SiRedis className="text-[48px]" />, title: "Redis" },
  ];

  const aiLogos: LogoItem[] = [
    { node: <SiTensorflow className="text-[48px]" />, title: "TensorFlow" },
    { node: <SiPytorch className="text-[48px]" />, title: "PyTorch" },
    { node: <SiScikitlearn className="text-[48px]" />, title: "Scikit-Learn" },
  ];

  const categories = [
    { title: "Programming", logos: programmingLogos, color: "from-blue-500 to-cyan-500" },
    { title: "DevOps", logos: devopsLogos, color: "from-purple-500 to-pink-500" },
    { title: "Monitoring", logos: monitoringLogos, color: "from-green-500 to-emerald-500" },
    { title: "Big Data", logos: bigDataLogos, color: "from-orange-500 to-red-500" },
    { title: "Databases", logos: databaseLogos, color: "from-indigo-500 to-blue-500" },
    { title: "AI / ML", logos: aiLogos, color: "from-pink-500 to-rose-500" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-32 px-8">
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-black text-center mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Skills
        </h1>
        <p className="text-xl text-center text-slate-300 mb-20 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="flex flex-col gap-16">
          {categories.map((cat) => (
            <div key={cat.title} className="group">
              <div className="flex items-center gap-4 mb-8">
                <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  {cat.title}
                </h2>
                <div className={`flex-1 h-1 bg-gradient-to-r ${cat.color} opacity-50 rounded-full`}></div>
              </div>
              
              <div className="relative h-[100px] md:h-[120px] w-full rounded-3xl overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-4">
                <LogoLoop
                  logos={cat.logos}
                  speed={80}
                  direction="left"
                  logoHeight={64}
                  gap={48}
                  fadeOut
                  scaleOnHover
                  pauseOnHover
                  fadeOutColor="rgb(15 23 42)"
                  ariaLabel={`${cat.title} logos`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}