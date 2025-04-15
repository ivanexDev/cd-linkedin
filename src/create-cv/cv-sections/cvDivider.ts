import { Paragraph } from "docx";

export const cvDivider = (spacing: number = 200) => {
  return new Paragraph({
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
