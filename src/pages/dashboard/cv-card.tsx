import type { CV } from "@/types/types";
import { EllipsisVertical, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CVCard({ cv }: { cv: CV }) {
  const navigate = useNavigate()

  return <div onClick={() => navigate('/cv_editor')} className="border border-border rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
    <div className="w-40 h-20 bg-accent rounded-t-xl" />
    <div className="flex items-end justify-between p-3 pb-4">
      <div className="">
        <p className="text block">{cv.title}</p> 
        <p className="text-muted-fg text-xs">{cv.position}</p> 
      </div>
      <EllipsisVertical size={16} />
    </div>
  </div>
}

export function CVNewCard() {
  return <div className="flex items-center justify-center border border-border rounded-xl w-40 transition-all bg-card hover:shadow-blue-500/20 shadow-sm hover:shadow-md hover:-translate-y-1">
    <Plus size={28} className="text-muted-fg" />
  </div>
}