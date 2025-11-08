import type { CV } from "@/types/types";

export { templateClassic } from "./templateClassic";
export { templateModern } from "./templateModern";

export const templates = {
  classic: (cv: CV) => import("./templateClassic").then(m => m.templateClassic(cv)),
  modern: (cv: CV) => import("./templateModern").then(m => m.templateModern(cv)),
};
