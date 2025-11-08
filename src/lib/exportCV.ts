import type { CV } from "@/types/types.tsx";
import { templateClassic } from "./cvTemplates.ts";
import { templateModern } from "./cvTemplates.ts";
import { exportPDF } from "./exportPDF";
import { exportDOCX } from "./exportDOCX";

type TemplateType = "classic" | "modern";
type FormatType = "pdf" | "docx";

export async function exportCV(cv: CV, template: TemplateType, format: FormatType) {
  const templateData =
    template === "modern" ? templateModern(cv) : templateClassic(cv);

  if (format === "pdf") {
    await exportPDF(templateData, `${template}_cv.pdf`);
  } else {
    await exportDOCX(templateData, `${template}_cv.docx`);
  }
}
