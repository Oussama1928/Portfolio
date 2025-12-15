import FloatingLines from "@/components/background/FloatingLines";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <FloatingLines
        enabledWaves={['top', 'middle', 'bottom']}
        lineCount={[5, 7, 10]}       // moins de lignes
        lineDistance={[10, 12, 15]}  // plus espacées
        bendRadius={5.0}
        bendStrength={-0.2}          // moins de distorsion
        interactive={true}
        parallax={true}
        linesGradient={['#E947F5', '#5B8AFF']} // couleurs plus douces
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-10 pt-32 text-white">
        <h1 className="text-6xl font-bold">
          Hi, I’m <span className="text-pink-400">Your Name</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/80">
          Full-stack developer crafting immersive web experiences.
        </p>
      </div>
    </section>
  );
}
