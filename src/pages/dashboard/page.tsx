import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { CVCard, CVNewCard } from "./cv-card";
import type { CV } from "@/types/types";


export default function Dashboard() {


  const cvs: CV[] = [
    { title: "Main Go", position: "Go Developer" },
    { title: "Main Python", position: "Python Developer" },
    { title: "Test Go", position: "Go Developer" },
  ]
  
  
  return <div className="flex flex-col sticky items-center">
    <NavBar page="Dashboard" />

    <div className="w-[80vw] pt-10">
      <Button className="mb-8">Start training</Button>

      <div>
        <p className="font-medium text-lg mb-4">Your CVs:</p>
        <div className="flex gap-4">
          {cvs.map((c) => (
            <CVCard cv={c} />
          ))}
          <CVNewCard />
        </div>
      </div>
    </div>

  </div>
}