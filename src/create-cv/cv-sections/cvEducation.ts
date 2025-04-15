import { HeadingLevel, Paragraph, TextRun } from "docx";
import { Education } from "../../domain/interfaces/cvData.interface";

export const cvEducation = (education: Education[] | undefined) => {
  const edu = education?.map((ed) => {
    return [
      new Paragraph({
        text: `${ed.degree} - ${ed.time} - ${ed.institution}`,
        bullet: { level: 0 },
        // spacing: { after: 300 },
      }),
      // new Paragraph({
      //   text: ed.institution,
      //   // spacing: { after: 300 },
      // }),
    ];
  });

  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "EDUCATION",
          bold: true,
          size: 24,
        }),
      ],
    }),
    ...edu?.flat()!,
  ];
};
