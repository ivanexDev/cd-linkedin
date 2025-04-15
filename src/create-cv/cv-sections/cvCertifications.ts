import { HeadingLevel, Paragraph, TextRun } from "docx";
import { Certification } from "../../domain/interfaces/cvData.interface";

export const cvCertifications = (
  certifications: Certification[] | undefined
) => {
  const certs = certifications?.map((cert) => {
    return new Paragraph({
      text: `${cert.title} - ${cert.institution}`,
      bullet: { level: 0 },
      // spacing: { after: 300 },
    });
  });

  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "CERTIFICATIONS",
          bold: true,
          size: 24,
        }),
      ],
    }),
    ...certs!,
  ];
};
