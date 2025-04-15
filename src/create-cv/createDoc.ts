import { Document, Packer, Paragraph, HeadingLevel } from "docx";
import * as fs from "fs";
import { getUser } from "../api/getUser";
import {
  cvHeader,
  cvSummary,
  cvExperience,
  cvEducation,
  cvDivider,
} from "./cv-sections";
import { cvCertifications } from "./cv-sections/cvCertifications";
import { cvTechnicalSkills } from "./cv-sections/cvTechnicalSkills";

export const createDocx = async (url: string) => {
  const user = await getUser(url);

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Arial",
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720, // 0.5"
              bottom: 720,
              left: 720,
              right: 720,
            },
          },
        },
        children: [
          // Name title
          ...cvHeader(user?.mainInfo),

          cvDivider(),

          // SUMMARY
          ...cvSummary(user?.mainInfo.summary),

          cvDivider(),

          // WORK EXPERIENCE
          ...cvExperience(user?.workExperience)!,

          cvDivider(),
          // EDUCATION
          ...cvEducation(user?.education),

          cvDivider(),

          // CERTIFICATIONS
          ...cvCertifications(user?.certifications),

          cvDivider(),

          // TECHNICAL SKILLS
          ...cvTechnicalSkills(user?.technicalSkills),

          // LANGUAGES
          // new Paragraph({ text: "LANGUAGES", heading: HeadingLevel.HEADING_2 }),
          // new Paragraph({
          //   text: "Spanish (native), English (intermediate)",
          // }),
        ],
      },
    ],
  });

  // Guardar como archivo .docx
  const data = await Packer.toBuffer(doc);
  const name = user?.mainInfo.name.replace(/ /g, "-").toLowerCase();
  fs.writeFileSync(`${__dirname}/cvs/${name}.docx`, data);
};
