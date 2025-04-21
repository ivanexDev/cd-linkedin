"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocx = void 0;
const docx_1 = require("docx");
const cv_sections_1 = require("./cv-sections");
const cvCertifications_1 = require("./cv-sections/cvCertifications");
const cvTechnicalSkills_1 = require("./cv-sections/cvTechnicalSkills");
const getLinkedinUser_1 = require("../api/getLinkedinUser");
const createDocx = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, getLinkedinUser_1.getLinkedinUser)(url);
    const doc = new docx_1.Document({
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
                    ...(0, cv_sections_1.cvHeader)(user === null || user === void 0 ? void 0 : user.mainInfo),
                    (0, cv_sections_1.cvDivider)(),
                    // SUMMARY
                    ...(0, cv_sections_1.cvSummary)(user === null || user === void 0 ? void 0 : user.mainInfo.summary),
                    (0, cv_sections_1.cvDivider)(),
                    // WORK EXPERIENCE
                    ...(0, cv_sections_1.cvExperience)(user === null || user === void 0 ? void 0 : user.workExperience),
                    (0, cv_sections_1.cvDivider)(),
                    // EDUCATION
                    ...(0, cv_sections_1.cvEducation)(user === null || user === void 0 ? void 0 : user.education),
                    (0, cv_sections_1.cvDivider)(),
                    // CERTIFICATIONS
                    ...(0, cvCertifications_1.cvCertifications)(user === null || user === void 0 ? void 0 : user.certifications),
                    (0, cv_sections_1.cvDivider)(),
                    // TECHNICAL SKILLS
                    ...(0, cvTechnicalSkills_1.cvTechnicalSkills)(user === null || user === void 0 ? void 0 : user.technicalSkills),
                    // LANGUAGES
                    // new Paragraph({ text: "LANGUAGES", heading: HeadingLevel.HEADING_2 }),
                    // new Paragraph({
                    //   text: "Spanish (native), English (intermediate)",
                    // }),
                ],
            },
        ],
    });
    const buffer = yield docx_1.Packer.toBuffer(doc);
    console.log("created");
    // Guardar como archivo .docx
    // const data = await Packer.toBuffer(doc);
    // const name = user?.mainInfo.name.replace(/ /g, "-").toLowerCase();
    // fs.writeFileSync(`${__dirname}/cvs/${name}.docx`, data);
    return { buffer, filename: `${name}.docx` };
});
exports.createDocx = createDocx;
