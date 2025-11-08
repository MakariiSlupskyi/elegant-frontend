import NavBar from "@/components/nav-bar";
import type { Test } from "@/types/types";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useTestStore } from "@/store/test-store";


const tagColor: any = {
  'Python': 'bg-green-400/50',
  'Go': 'bg-blue-400/50',
  'Backend': 'bg-pink-400/50',
  'Frontend': 'bg-amber-400/50'
}

export default function ViewTests() {
  const { setRunningTest } = useTestStore()

  const tests: Test[] = [
    { title: "Go Backend", time_limit: 30, tags: ["Backend", "Go"], tasks: [
      { type: "quize", data: { question: "Are you OK?", options: [
        { text: "no(", is_right: false },
        { text: "Yes!!!", is_right: true },
        { text: "noo", is_right: false },
        { text: "no.", is_right: false },
      ] } },
      { type: "quize", data: { question: "You sure?", options: [
        { text: "no(", is_right: false },
        { text: "Yes!!!", is_right: true },
        { text: "noo", is_right: false },
        { text: "no.", is_right: false },
      ] } }
    ] },
      { title: "System Design", time_limit: 10, tags: ["Python", "Go"], tasks: [{ type: "open", data: {} }] },
      { title: "Frontend", time_limit: 15, tags: ["Frontend"], tasks: [{ type: "liveCode", data: {} }] },
    ]

  return <div className="flex flex-col items-center h-screen">
      <NavBar path={["Train"]} />

      <div className="flex flex-col items-start w-[60vw] mt-20">
        <p className="font-bold text-lg mb-6">Statictics</p>

        <div className="bg-accent h-40 w-full mb-10">
        </div>

        <p className="font-bold text-lg mb-6">Tests</p>

        <div className="flex gap-4">
          {tests.map((t, id) => (
            <Dialog key={id}>
              <DialogTrigger>
                <TestPreviewCard test={t} />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <TestOverview test={t} handleTestSelect={() => setRunningTest(t)} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
}


const TestPreviewCard = ({ test }: { test: Test}) => {
  return <div className="border border-border rounded-xl bg-card transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
    <div className="flex flex-col items-start justify-between w-40 h-35 p-3 pb-4">
      <div className="flex flex-col items-start">
        <DialogTitle className="font-medium mb-2">{test.title}</DialogTitle>
        <p className="text-sm block mb-2">Time: {test.time_limit}min</p>
      </div>
      <DialogDescription />
      <div className="flex gap-1">
        {test.tags.map((t, id) => (
          <div key={id} className={`${tagColor[t]} px-2 py-1 rounded-full`}>
            <p className="text-xs">{t}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
}

const TestOverview = ({ test, handleTestSelect }: { test: Test, handleTestSelect: () => void }) => {
  return <div className="">
      <p className="font-bold text-2xl mb-2">{test.title}</p>
      
      <div className="flex gap-1 mb-10">
        {test.tags.map((t, id) => <div key={id} className={`${tagColor[t]} px-2 py-1 rounded-full`}>
          <p className="text-xs">{t}</p>
        </div>)}
      </div>

      <p className="mb-2 text font-medium">Tasks: 10</p>
      <p className="mb-8 text font-medium">Time: {test.time_limit}</p>

      <Button onClick={() => handleTestSelect()}>Start test</Button>  
    </div>
}