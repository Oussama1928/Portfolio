import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import JourneyPage from "./pages/JourneyPage"
import ProjectPage from "./pages/ProjectPage"
import ProjectDetailPage from "./pages/ProjectDetailPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JourneyPage />} />
        <Route path="/projects/:experienceId" element={<ProjectPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  )
}
