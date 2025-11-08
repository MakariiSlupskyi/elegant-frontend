import type { Test } from "@/types/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

// type TestStore = {
//   runningTestId: number
//   timer: number
//   setRunningTest: (id: number, test: Test) => void
//   reset: () => void
// }

// export const useTestStore = create<TestStore>()(
//   persist(
//     (set) => ({
//       runningTestId: -1,
//       timer: -1,
//       setRunningTest: (id, test) =>
//         set({
//           runningTestId: id,
//           timer: test.time_limit,
//         }),
//         reset: () => set({ runningTestId: -1, timer: -1 }),
//       }
//     ),
//     {
//       name: "test-store",
//     }
//   )
// )


type TestStore = {
  runningTest: Test | null
  timerSeconds: number
  timeLimitSeconds: number
  startTime: number | null
  isRunning: boolean
  intervalId: number | null
  curTask: number
  score: number
  nextTask: () => void
  addScore: (a: number) => void
  setRunningTest: (test: Test) => void
  startTimer: () => void
  pauseTimer: () => void
  quit: () => void
}

export const useTestStore = create<TestStore>()(
  persist(
    (set, get) => ({
      runningTest: null,
      timerSeconds: 0,
      timeLimitSeconds: 0,
      startTime: null,
      isRunning: false,
      intervalId: null,
      curTask: 0,
      score: 0,

      nextTask: () => {set({curTask: get().curTask + 1})},

      addScore: (a) => {
        const curScore = get().score
        set({score: curScore + a })
      },

      setRunningTest: (test) => {
        const prev = get().intervalId
        if (prev) clearInterval(prev)
        const total = test.time_limit * 60
        set({
          runningTest: test,
          timerSeconds: total,
          timeLimitSeconds: total,
          startTime: null,
          isRunning: false,
          intervalId: null,
        })
        get().startTimer()
      },

      startTimer: () => {
        const { isRunning, intervalId, startTime } = get()
        if (isRunning || intervalId) return

        const start = startTime ?? Date.now()
        set({ isRunning: true, startTime: start })

        const newInterval = window.setInterval(() => {
          set((state) => {
            const elapsed = Math.floor((Date.now() - state.startTime!) / 1000)
            const remaining = Math.max(state.timeLimitSeconds - elapsed, 0)
            if (remaining <= 0) {
              clearInterval(newInterval)
              return { timerSeconds: 0, isRunning: false, intervalId: null }
            }
            return { timerSeconds: remaining }
          })
        }, 1000)

        set({ intervalId: newInterval })
      },

      pauseTimer: () => {
        const { intervalId, timerSeconds } = get()
        if (intervalId) {
          clearInterval(intervalId)
          set({
            isRunning: false,
            intervalId: null,
            timeLimitSeconds: timerSeconds,
            startTime: null,
          })
        }
      },

      quit: () => {
        set({
          runningTest: null,
          timerSeconds: 0,
          timeLimitSeconds: 0,
          startTime: null,
          isRunning: false,
          intervalId: null,
          curTask: 0,
          score: 0,
        })
      },
    }),
    { name: "test-store" }
  )
)
