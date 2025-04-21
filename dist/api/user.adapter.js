"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAdapter = void 0;
const defaultValue = "Missing content";
const userAdapter = (data) => {
    const workExperience = data.data.experiences.map((ex) => {
        return {
            position: ex.title || defaultValue,
            time: ex.date_range || defaultValue,
            company: ex.company || defaultValue,
            description: ex.description || defaultValue,
        };
    });
    const education = data.data.educations.map((edu) => {
        return {
            institution: edu.school || defaultValue,
            degree: edu.degree || defaultValue,
            time: edu.date_range || defaultValue,
        };
    });
    const certifications = data.data.certifications.map((cert) => {
        return {
            institution: cert.authority || defaultValue,
            title: cert.name || defaultValue,
        };
    });
    const technicalSkills = data.data.skills.replace(/\|/g, " - ") || defaultValue;
    return {
        mainInfo: {
            name: data.data.full_name || defaultValue,
            rol: data.data.headline || defaultValue,
            summary: data.data.about || defaultValue,
        },
        workExperience,
        education,
        certifications,
        technicalSkills,
    };
};
exports.userAdapter = userAdapter;
