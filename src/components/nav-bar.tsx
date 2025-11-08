import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ path, className, children }: { path: string[], className?: string, children?: any }) {
  const navigate = useNavigate()

  return <div className={cn(
      "flex flex-col items-center w-full border-b border-border bg-card",
      className
    )}>
      <div className='flex items-center justify-between min-w-[80vw] py-4'>
        <div className="flex gap-2 items-center">
          <Link className="flex items-center gap-2" to={"/"}>
            <div className="w-6 h-6 bg-amber-600 rounded-full" />
            <span className="font-bold">Elegant</span>
          </Link>
          {path.map((p, id) => <div key={id} className="flex gap-2">
            <p className="text-muted-fg">/</p>
            <p className="text-muted-fg">{p}</p>
          </div>)}
        </div>
        <div className="flex gap-4 items-center">
          {children}
          <div onClick={() => navigate('/profile')} className="w-6 h-6 bg-amber-600 rounded-full" />
        </div>
      </div>
    </div>
}