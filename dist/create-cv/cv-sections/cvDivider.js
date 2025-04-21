"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvDivider = void 0;
const docx_1 = require("docx");
const cvDivider = (spacing = 200) => {
    return new docx_1.Paragraph({
        border: {
            bottom: {
                color: "cccccc",
                style: "single",
                size: 4,
            },
        },
        spacing: { before: 100, after: spacing },
    });
};
exports.cvDivider = cvDivider;
