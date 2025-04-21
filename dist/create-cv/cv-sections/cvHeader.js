"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvHeader = void 0;
const docx_1 = require("docx");
const cvHeader = (mainInfo) => {
    return [
        new docx_1.Paragraph({
            children: [
                new docx_1.TextRun({
                    text: mainInfo === null || mainInfo === void 0 ? void 0 : mainInfo.name,
                    bold: true,
                    size: 36,
                }),
            ],
            alignment: docx_1.AlignmentType.START,
        }),
        new docx_1.Paragraph({
            children: [
                new docx_1.TextRun({
                    text: mainInfo === null || mainInfo === void 0 ? void 0 : mainInfo.rol,
                    bold: true,
                    size: 16,
                }),
            ],
            alignment: docx_1.AlignmentType.START,
        }),
        new docx_1.Paragraph({
            children: [
                new docx_1.TextRun({
                    text: "your links here!",
                    bold: true,
                    size: 18,
                    color: "0000FF",
                }),
            ],
            alignment: docx_1.AlignmentType.START,
            spacing: { after: 200 },
        }),
    ];
};
exports.cvHeader = cvHeader;
