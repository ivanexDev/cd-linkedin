import { HeadingLevel, Paragraph, TextRun } from "docx";
import { WorkExperience } from "../../domain/interfaces/cvData.interface";

export const cvExperience = (workExperience: WorkExperience[] | undefined) => {
  const experiences = workExperience?.map((exp) => {
    return [
      new Paragraph({
        children: [
          new TextRun({
            text: `${exp.position} ${exp.company} - ${exp.time}`,
            size: 20,
            bold: true,
          }),
        ],
      }),

      new Paragraph({
        children: [
          new TextRun({
            text: exp.description,
            size: 16,
          }),
        ],

        spacing: { after: 100 },
      }),
    ];
  });

  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "WORK EXPERIENCE",
          bold: true,
          size: 24,
        }),
      ],
    }),
    ...experiences?.flat()!,
  ];
};
