"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvTechnicalSkills = void 0;
const docx_1 = require("docx");
const cvTechnicalSkills = (technicalSkills) => {
    return [
        new docx_1.Paragraph({
            children: [
                new docx_1.TextRun({
                    text: "TECHNICAL SKILLS",
                    bold: true,
                    size: 24,
                }),
            ],
        }),
        new docx_1.Paragraph({
            text: technicalSkills,
            // spacing: { after: 300 },
        }),
    ];
};
exports.cvTechnicalSkills = cvTechnicalSkills;
