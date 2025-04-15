import { AlignmentType, HeadingLevel, Paragraph, TextRun } from "docx";
import { MainInfo } from "../../domain/interfaces/cvData.interface";
export const cvHeader = (mainInfo: MainInfo | undefined) => {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: mainInfo?.name,
          bold: true,
          size: 36,
        }),
      ],
      alignment: AlignmentType.START,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: mainInfo?.rol,
          bold: true,
          size: 16,
        }),
      ],
      alignment: AlignmentType.START,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "your links here!",
          bold: true,
          size: 18,
          color: "0000FF",
        }),
      ],
      alignment: AlignmentType.START,
      spacing: { after: 200 },
    }),
  ];
};
