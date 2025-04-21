"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvSummary = void 0;
const docx_1 = require("docx");
const cvSummary = (summary) => {
    return [
        new docx_1.Paragraph({
            children: [
                new docx_1.TextRun({
                    text: "SUMMARY",
                    bold: true,
                    size: 24,
                }),
            ],
        }),
        new docx_1.Paragraph({
            children: [
                new docx_1.TextRun({
                    text: summary,
                    size: 16,
                }),
            ],
            // spacing: { after: 300 },
        }),
    ];
};
exports.cvSummary = cvSummary;
