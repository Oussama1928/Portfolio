import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  )
}
