import { Document, Packer } from "docx";
import {
  cvHeader,
  cvSummary,
  cvExperience,
  cvEducation,
  cvDivider,
} from "./cv-sections";
import { cvCertifications } from "./cv-sections/cvCertifications";
import { cvTechnicalSkills } from "./cv-sections/cvTechnicalSkills";
import { getLinkedinUser } from "../api/getLinkedinUser";

export const createDocx = async (url: string) => {
  const user = await getLinkedinUser(url);

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
            size: {
              width: 12240, // 8.5 pulgadas
              height: 15840, // 11 pulgadas
            },
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

  const buffer = await Packer.toBuffer(doc);
  console.log("created");

  // Guardar como archivo .docx
  // const data = await Packer.toBuffer(doc);
  // const name = user?.mainInfo.name.replace(/ /g, "-").toLowerCase();
  // fs.writeFileSync(`${__dirname}/cvs/${name}.docx`, data);

  return { buffer, filename: `${name}.docx` };
};
