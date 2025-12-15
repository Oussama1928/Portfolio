import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from '@/pages/Home';
import Journey from "@/pages/Journey";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/skills" element={<div>Skills</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </>
  );
}
