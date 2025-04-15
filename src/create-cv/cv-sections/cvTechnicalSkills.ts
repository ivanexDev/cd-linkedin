import { HeadingLevel, Paragraph, TextRun } from "docx";

export const cvTechnicalSkills = (technicalSkills: string | undefined) => {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "TECHNICAL SKILLS",
          bold: true,
          size: 24,
        }),
      ],
    }),
    new Paragraph({
      text: technicalSkills,
      // spacing: { after: 300 },
    }),
  ];
};
