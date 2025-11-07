import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";


export default function Login() {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/auth/google/login'
  }

  return <div className="flex flex-col h-screen items-center sticky">
    <NavBar page="Login" />

    <div className="flex flex-col mt-30 justify-center items-center bg-card border border-border rounded-2xl px-10 py-6 shadow-lg">
      <span className="font-medium text-3xl mb-10">Welcome to Elegant!</span>
      <Button onClick={handleGoogleLogin}>Continue with Google</Button>
    </div>

  </div>
}