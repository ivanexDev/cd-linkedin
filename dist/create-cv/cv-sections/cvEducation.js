"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvEducation = void 0;
const docx_1 = require("docx");
const cvEducation = (education) => {
    const edu = education === null || education === void 0 ? void 0 : education.map((ed) => {
        return [
            new docx_1.Paragraph({
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
        new docx_1.Paragraph({
            children: [
                new docx_1.TextRun({
                    text: "EDUCATION",
                    bold: true,
                    size: 24,
                }),
            ],
        }),
        ...edu === null || edu === void 0 ? void 0 : edu.flat(),
    ];
};
exports.cvEducation = cvEducation;
