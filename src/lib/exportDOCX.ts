import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

/**
 * Export a CV template to DOCX using docx.
 * Template format: { title: string; content: { type: string; text?: string; items?: string[] }[] }
 */
export async function exportDOCX(templateData: any, fileName = "cv.docx") {
  const paragraphs: Paragraph[] = [];

  // Header
  paragraphs.push(
    new Paragraph({
      children: [
        new TextRun({
          text: templateData.title || "CV",
          bold: true,
          size: 32, // = 16pt
        }),
      ],
      spacing: { after: 200 },
    })
  );

  // Content
  templateData.content.forEach((block: any) => {
    switch (block.type) {
      case "header":
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: block.text,
                bold: true,
                size: 28,
              }),
            ],
            spacing: { after: 150 },
          })
        );
        break;

      case "section":
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: block.title, bold: true, size: 24 }),
            ],
          })
        );
        paragraphs.push(new Paragraph(block.text));
        paragraphs.push(new Paragraph({})); // spacing
        break;

      case "list":
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: block.title, bold: true, size: 24 }),
            ],
          })
        );
        block.items.forEach((item: string) => {
          paragraphs.push(
            new Paragraph({
              text: item,
              bullet: { level: 0 },
            })
          );
        });
        paragraphs.push(new Paragraph({})); // spacing
        break;

      default:
        paragraphs.push(new Paragraph(block.text || ""));
        break;
    }
  });

  const doc = new Document({
    sections: [{ children: paragraphs }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, fileName);
}
