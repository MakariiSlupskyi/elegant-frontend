import type { CV } from "@/types/types";


export const templateClassic = (cv: CV) => ({
  title: "Classic CV",
  content: [
    { type: "header", text: cv.position },
    { type: "section", title: "Summary", text: cv.summary },
    { type: "section", title: "Skills", text: cv.skills },
    { type: "section", title: "Experience", text: cv.experience },
    { type: "section", title: "Education", text: cv.edu },
  ],
});
