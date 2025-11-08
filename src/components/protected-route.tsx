import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./auth-context"

export const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div> // or spinner

  return user ? <Outlet /> : <Navigate to="/login" replace />
}
