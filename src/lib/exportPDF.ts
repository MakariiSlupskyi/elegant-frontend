import jsPDF from "jspdf";


export function exportPDF(templateData: any, fileName = "cv.pdf") {
  const doc = new jsPDF();

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(templateData.title || "CV", 10, 15);

  // Content
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  let y = 30;

  templateData.content.forEach((block: any) => {
    switch (block.type) {
      case "header":
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text(block.text, 10, y);
        y += 10;
        break;

      case "section":
        doc.setFont("helvetica", "bold");
        doc.text(block.title, 10, y);
        y += 7;
        doc.setFont("helvetica", "normal");
        doc.text(block.text, 15, y);
        y += 10;
        break;

      case "list":
        doc.setFont("helvetica", "bold");
        doc.text(block.title, 10, y);
        y += 7;
        doc.setFont("helvetica", "normal");
        block.items.forEach((item: string) => {
          doc.text(`• ${item}`, 15, y);
          y += 7;
        });
        y += 5;
        break;

      default:
        doc.text(block.text || "", 10, y);
        y += 10;
        break;
    }
  });

  doc.save(fileName);
}
