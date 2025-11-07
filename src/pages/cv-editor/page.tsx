import { jsPDF } from "jspdf";
import { Button } from "@/components/ui/button";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import NavBar from "@/components/nav-bar";
import type { CV } from "@/types/types";
import { useState } from "react";

export default function CVEditor() {
  const [cvData, setCvData] = useState<CV>({
    title: "Main Go CV",
    position: "Main Go CV",
    edu: "PL KPI of Kyiv",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return <div className="flex flex-col h-screen items-center sticky">
    <NavBar page="CV Editor" />

    <div className="flex gap-20 justify-center py-20 h-full">
      <div className="w-[30vw]">
        <Tabs defaultValue="manual">
          <TabsList>
            <TabsTrigger value="manual">Manual</TabsTrigger>
            <TabsTrigger value="ai">AI help</TabsTrigger>
          </TabsList>
          <TabsContent value="manual"><ManualMenu cvData={cvData} handleChange={handleChange} /></TabsContent>
          <TabsContent value="ai"><AIMenu /></TabsContent>
        </Tabs>
      </div>

      <div className="w-[30vw]">
        <div className="flex gap-4 flex-col items-end h-full">
          <Select>
            <SelectTrigger defaultValue="temp-1" className="w-[180px]">
              <SelectValue placeholder="Select template" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Templates</SelectLabel>
                <SelectItem value="temp-1">Template 1</SelectItem>
                <SelectItem value="temp-2">Template 2</SelectItem>
                <SelectItem value="temp-3">Template 3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="bg-white text-black py-8 px-10 rounded-2xl border border-border shadow w-full h-full">
            <p className="font-bold text-2xl">Go Developer</p>
            <p>Makarii Slupskyi</p>
          </div>

          <div>
            <Button className="mr-2">Export PDF</Button>
            <Button>Export DOCX</Button>
          </div>
        </div>

      </div>
    </div>

  </div>
}

function ManualMenu({ cvData, handleChange }: { cvData: CV, handleChange: (e: any) => void }) {
  return <div className="flex flex-col justify-between pt-4 h-fit">
    <div>
      <p className="font-bold mb-2">Title:</p>
      <Input className="mb-4" placeholder="Type CV title..." name="title" value={cvData.title} onChange={e => handleChange(e)} />
      
      <p className="font-bold mb-2">Position:</p>
      <Input className="mb-4" placeholder="Type CV position..." name="position" value={cvData.position} onChange={e => handleChange(e)} />
      
      <p className="font-bold mb-2">Summary:</p>
      <Textarea className="mb-4" placeholder="Type your summary..." name="summary" value={cvData.summary ?? ""} onChange={e => handleChange(e)} />
      
      <p className="font-bold mb-2">Skills:</p>
      <Textarea className="mb-4" placeholder="Type your skills..." name="skills" value={cvData.skills ?? ""} onChange={e => handleChange(e)} />

      <p className="font-bold mb-2">Education:</p>
      <Textarea className="mb-4" placeholder="Type your skills..." name="edu" value={cvData.edu ?? ""} onChange={e => handleChange(e)}  />
    </div>

      <Button className="self-start mt-auto">Exit</Button>

  </div>
}


function AIMenu() {
  return <div className="flex flex-col justify-between pt-4 h-fit">
    <div>
      <p className="font-bold mb-2">Tell about yourself</p>
      <Textarea className="mb-4" placeholder="Type your skills..." />
    </div>

    <Button className="self-start mt-auto">Run</Button>
  </div>
}


// const heading = "My CV";
// const bulletPoints = [
//   "Experienced in React, Go, and PostgreSQL",
//   "Strong understanding of UI/UX principles",
//   "Team collaboration and agile workflow",
// ];

// const exportPDF = () => {
//   const doc = new jsPDF()
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(18);
//   doc.setLineWidth(10);
//   doc.text(heading, 10, 15);
  
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(12);
//   let y = 30;
//   bulletPoints.forEach((point) => {
//     doc.text(`• ${point}`, 15, y);
//     y += 10;
//   });

//   doc.save("cv.pdf");
// };

// const exportDOCX = async () => {
//   const doc = new Document({
//     sections: [
//       {
//         children: [
//           new Paragraph({
//             children: [
//               new TextRun({
//                 text: heading,
//                 bold: true,
//                 size: 32, // font size (half-points)
//               }),
//             ],
//           }),
//           ...bulletPoints.map(
//             (point) =>
//               new Paragraph({
//                 text: point,
//                 bullet: { level: 0 },
//               })
//           ),
//         ],
//       },
//     ],
//   });
  
//   const blob = await Packer.toBlob(doc);
//   saveAs(blob, "cv.docx");
// };