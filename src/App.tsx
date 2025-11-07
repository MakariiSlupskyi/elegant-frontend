import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard/page"
import Hero from "./pages/hero/page"
import Login from "./pages/login/page"
import Train from "./pages/train/page"
import CVEditor from "./pages/cv-editor/page"
function App() {
  return (
    <Routes>
      {/* redirect / -> /dashboard */}
      {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}

      {/* your main routes */}
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/train" element={<Train />} />
      <Route path="/cv_editor" element={<CVEditor />} />
      
      {/* <Route path="/trainings" element={<Tests />} /> */}
      {/* <Route path="/trainings/:id" element={<TestDetail />} /> */}

      {/* catch-all for 404s */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
