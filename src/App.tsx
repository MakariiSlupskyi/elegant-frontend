import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard/page"
import Hero from "./pages/hero/page"
import Login from "./pages/login/page"
import Train from "./pages/train/page"
import CVEditor from "./pages/cv-editor/page"
import Profile from "./pages/profile/page"
import { ProtectedRoute } from "./components/protected-route"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/train" element={<Train />} />
        <Route path="/cv_editor" element={<CVEditor />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  )
}

export default App
