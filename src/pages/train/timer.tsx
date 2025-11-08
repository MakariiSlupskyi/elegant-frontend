import { cn } from "@/lib/utils"
import { useTestStore } from "@/store/test-store";
import { Progress } from "@radix-ui/react-progress";
import { useEffect } from "react";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}

export default function Timer({ className }: { className?: string}) {
  const { timerSeconds, timeLimitSeconds } = useTestStore();

  return <div className={cn("flex flex-col items-center gap-2 w-full", className)}>
    <p className="self-start">
      {formatTime(timerSeconds)} / {formatTime(timeLimitSeconds)}
    </p>
    <Progress value={timerSeconds / timeLimitSeconds * 100} className="w-full " />
  </div>
}