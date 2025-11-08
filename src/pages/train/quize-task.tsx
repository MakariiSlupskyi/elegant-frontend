import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useTestStore } from "@/store/test-store";
import { useEffect, useState } from "react";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}

export default function QuizeTask({ task }: { task: any }) {
  const {
    timerSeconds,
    timeLimitSeconds,
    startTimer,
    pauseTimer,
    quit,
    runningTest,
    nextTask,
    addScore, // <-- make sure it's in your store
  } = useTestStore();

  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    pauseTimer();
    startTimer();
  }, []);

  if (!runningTest) return null;

  const handleAnswer = () => {
    if (selected === null) return;

    const chosen = task.data.options[selected];
    const isRight = chosen.is_right === true;

    if (isRight) addScore(1);

    nextTask();
  };

  return (
    <div className="flex flex-col items-center h-screen border">
      <NavBar
        path={["Train", runningTest.title]}
        children={
          <Button variant={"secondary"} onClick={quit}>
            Quit Test
          </Button>
        }
      />

      <div className="flex flex-col items-end gap-10 w-[50vw] mt-20 py-8 px-16 border border-border rounded-2xl shadow-xl">
        <div className="flex flex-col items-center gap-2 w-full mb-15">
          <p className="self-start">
            {formatTime(timerSeconds)} / {formatTime(timeLimitSeconds)}
          </p>
          <Progress
            value={(timerSeconds / timeLimitSeconds) * 100}
            className="w-full"
          />
        </div>

        <div className="flex flex-col items-center mb-10">
          <p className="font-medium text-xl mb-10">{task.data.question}</p>

          <div className="flex justify-center gap-2 w-full flex-wrap">
            {task.data.options.map((o: any, id: number) => {
              const isSelected = selected === id;
              return (
                <Button
                  key={id}
                  onClick={() => setSelected(id)}
                  className={`min-w-[15vw] ${
                    isSelected
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-secondary text-secondary-fg condary"
                  }`}
                >
                  {o.text}
                </Button>
              );
            })}
          </div>
        </div>

        <Button
          onClick={handleAnswer}
          size={"lg"}
          className="self-end bg-green-500 hover:bg-green-700"
          disabled={selected === null}
        >
          Answer
        </Button>
      </div>
    </div>
  );
}
