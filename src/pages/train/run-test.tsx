import { Button } from "@/components/ui/button";
import { useTestStore } from "@/store/test-store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizeTask from "./quize-task";



export default function RunTest() {
  const navigate = useNavigate()
  const { runningTest, curTask, nextTask, quit } = useTestStore();


  if (!runningTest) return null

  if (curTask != runningTest.tasks.length) {
    const task = runningTest.tasks[curTask]
    if (task.type === "quize") {
      return <QuizeTask task={task} />
    }
    return <>
      <Button onClick={() => {}} size={"lg"} className="self-end bg-green-500 hover:bg-green-700">Answer</Button>
    </>

  } else {
    quit()
  }

  runningTest.tasks

}