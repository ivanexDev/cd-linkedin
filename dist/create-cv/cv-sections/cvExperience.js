"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvExperience = void 0;
const docx_1 = require("docx");
const cvExperience = (workExperience) => {
    const experiences = workExperience === null || workExperience === void 0 ? void 0 : workExperience.map((exp) => {
        return [
            new docx_1.Paragraph({
                children: [
                    new docx_1.TextRun({
                        text: `${exp.position} ${exp.company} - ${exp.time}`,
                        size: 20,
                        bold: true,
                    }),
                ],
            }),
            new docx_1.Paragraph({
                children: [
                    new docx_1.TextRun({
                        text: exp.description,
                        size: 16,
                    }),
                ],
                spacing: { after: 100 },
            }),
        ];
    });
    return [
        new docx_1.Paragraph({
            children: [
                new docx_1.TextRun({
                    text: "WORK EXPERIENCE",
                    bold: true,
                    size: 24,
                }),
            ],
        }),
        ...experiences === null || experiences === void 0 ? void 0 : experiences.flat(),
    ];
};
exports.cvExperience = cvExperience;
