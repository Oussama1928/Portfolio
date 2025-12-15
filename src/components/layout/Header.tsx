import { useLocation, useNavigate } from "react-router-dom";
import { DynamicNavigation } from "@/components/lightswind/dynamic-navigation";
import { GradientButton } from "@/components/lightswind/gradient-button";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeLink =
    location.pathname === "/" ? "home" : location.pathname.replace("/", "");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full h-16 px-6 flex items-center">

        {/* LEFT — Logo + Name */}
        <div className="flex items-center gap-3 mr-6">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="font-semibold tracking-wide text-white">
            Oussama Ben slima
          </span>
        </div>

        {/* CENTER — Navigation */}
        <div className="flex-1">
          <DynamicNavigation
            links={[
              { id: "home", label: "Home", href: "/" },
              { id: "journey", label: "Journey", href: "/journey" },
              { id: "projects", label: "Projects", href: "/projects" },
              { id: "skills", label: "Skills", href: "/skills" },
              { id: "about", label: "About Me", href: "/about" },
            ]}
            activeLink={activeLink}
            className="justify-center"
            backgroundColor="bg-transparent"
            textColor="text-white"
            highlightColor="bg-white/20"
            glowIntensity={0}
          />
        </div>

        {/* RIGHT — Buttons */}
        <div className="flex items-center gap-3 ml-6">
          <GradientButton
            size="md"
            glowEffect={false}
            variant="outline"
            onClick={() => navigate("/contact")}
          >
            Contact
          </GradientButton>

          <GradientButton
            size="md"
            glowEffect
            variant="outline"
            onClick={() => navigate("/login")}
          >
            Login
          </GradientButton>
        </div>

      </div>
    </header>
  );
}
