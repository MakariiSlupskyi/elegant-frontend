import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { CVCard, CVNewCard } from "./cv-card";
import type { CV,  } from "@/types/types";
import { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "@/lib/api";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const [_, setUser] = useState<any | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const userData = await getCurrentUser()
      setUser(userData)
    } catch (error) {
      console.log('Not authenticated')
    } finally {
    }
  }

  const handleLogout = async () => {
    await logoutUser()
    navigate('/')
    
  }

  const cvs: CV[] = [
    { title: "Main Go", position: "Go Developer" },
    { title: "Main Python", position: "Python Developer" },
    { title: "Test Go", position: "Go Developer" },
  ]
  
  return <div className="flex flex-col items-center">
    <NavBar path={["Dashboard"]}/>

    <div className="w-[80vw] pt-12">
      <Button onClick={() => navigate('/train')} className="mb-8 mr-2">Start training</Button>
      <Button onClick={handleLogout} className="mb-8">Logout</Button>

      <div>
        <p className="font-medium text-lg mb-4">Your CVs:</p>
        <div className="flex gap-4">
          {cvs.map((c, id) => (
            <CVCard key={id} cv={c} />
          ))}
          <CVNewCard />
        </div>
      </div>
    </div>

  </div>
}