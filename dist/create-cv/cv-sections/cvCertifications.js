"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvCertifications = void 0;
const docx_1 = require("docx");
const cvCertifications = (certifications) => {
    const certs = certifications === null || certifications === void 0 ? void 0 : certifications.map((cert) => {
        return new docx_1.Paragraph({
            text: `${cert.title} - ${cert.institution}`,
            bullet: { level: 0 },
            // spacing: { after: 300 },
        });
    });
    return [
        new docx_1.Paragraph({
            children: [
                new docx_1.TextRun({
                    text: "CERTIFICATIONS",
                    bold: true,
                    size: 24,
                }),
            ],
        }),
        ...certs,
    ];
};
exports.cvCertifications = cvCertifications;
