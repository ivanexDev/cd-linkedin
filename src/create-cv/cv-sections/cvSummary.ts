import { HeadingLevel, Paragraph, TextRun } from "docx";

export const cvSummary = (summary: string | undefined) => {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "SUMMARY",
          bold: true,
          size: 24,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: summary,
          size: 16,
        }),
      ],
      // spacing: { after: 300 },
    }),
  ];
};
