import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useTestStore } from "@/store/test-store";
import ViewTests from "./view-tests";
import QuizeTask from "./quize-task";
import RunTest from "./run-test";


export default function Train() {
  const { runningTest } = useTestStore();

  if (!!runningTest) {
    return <RunTest />
  }
  return <ViewTests />
}