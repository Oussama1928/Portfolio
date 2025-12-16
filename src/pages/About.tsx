import DomeGallery from "@/components/ui/DomeGallery";
import FadeIn from "@/components/ui/FadeIn";
import GradientText from "@/components/ui/GradientText";

export default function AboutPage() {
  const images = [
    { src: "/images/about/1.jpg" },
    { src: "/images/about/2.jpg" },
    { src: "/images/about/3.jpg" },
    { src: "/images/about/4.jpg" },
    { src: "/images/about/5.jpg" },
    { src: "/images/about/6.jpg" },
    { src: "/images/about/7.jpg" },
    { src: "/images/about/8.jpg" },
    { src: "/images/about/9.jpg" },
    { src: "/images/about/10.jpg" },
    { src: "/images/about/11.jpg" },
    { src: "/images/about/12.jpg" },
    { src: "/images/about/13.jpg" },
    { src: "/images/about/14.jpg" },
    { src: "/images/about/15.jpg" },
    { src: "/images/about/16.jpg" },
    { src: "/images/about/17.jpg" },
    { src: "/images/about/18.jpg" },
    { src: "/images/about/19.jpg" },
];

  return (
    <section className="relative w-full min-h-screen bg-background text-white px-6 md:px-12 pt-16 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>
        </FadeIn>

        {/* Paragraph */}
        <FadeIn delay={150}>
          <p className="font-playfair text-lg md:text-xl text-center text-black/70 max-w-3xl mx-auto leading-relaxed mb-20">
            "Outside of software engineering, I’m deeply passionate about music and sports.
            I enjoy music mixing and DJing.
            Sports are also an essential part of my life, especially football, fitness,
            and tennis, which help me stay disciplined and energized.
            I also love traveling and discovering new cultures, places, and perspectives."
            <br /><br />
        <GradientText
        className="text-xl md:text-2xl"
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        >
        The gallery below showcases moments and passions that reflect these interests.
        </GradientText>          
        </p>
        </FadeIn>
      </div>

      {/* Dome Gallery */}
      <FadeIn delay={300} className="relative w-full h-[80vh] max-w-7xl mx-auto">
        <DomeGallery
          images={images}
          fit={0.55}
          minRadius={520}
          maxVerticalRotationDeg={6}
          grayscale={false}
          overlayBlurColor="#ffffff"
        />
      </FadeIn>
    </section>
  );
}
