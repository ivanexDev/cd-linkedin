import { CvData } from "../domain/interfaces/cvData.interface";
import { Education, User } from "./interfaces/User.interface";

export const userAdapter = (data: User): CvData => {
  const workExperience = data.data.experiences.map((ex) => {
    return {
      position: ex.title,
      time: ex.date_range,
      company: ex.company,
      description: ex.description,
    };
  });

  const education = data.data.educations.map((edu) => {
    return {
      institution: edu.school,
      degree: edu.degree,
      time: edu.date_range,
    };
  });

  const certifications = data.data.certifications.map((cert) => {
    return {
      institution: cert.authority,
      title: cert.name,
    };
  });

  const technicalSkills = data.data.skills.replace(/\|/g, " - ");

  return {
    mainInfo: {
      name: data.data.full_name,
      rol: data.data.headline,
      summary: data.data.about,
    },
    workExperience,
    education,
    certifications,
    technicalSkills,
  } as CvData;
};
