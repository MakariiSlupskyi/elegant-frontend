import type { CV } from "@/types/types";

export const templateModern = (cv: CV) => ({
  title: "Modern CV",
  content: [
    { type: "header", text: `${cv.position.toUpperCase()}` },
    { type: "paragraph", text: cv.summary },
    { type: "list", title: "Skills", items: cv.skills?.split(",").map(s => s.trim()) },
    { type: "section", title: "Experience", text: cv.experience },
    { type: "section", title: "Education", text: cv.edu },
  ],
});
