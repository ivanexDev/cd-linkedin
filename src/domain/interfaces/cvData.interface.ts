export interface CvData {
  mainInfo: MainInfo;
  workExperience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  technicalSkills: string;
}

export interface MainInfo {
  name: string;
  rol: string;
  summary: string;
}

export interface WorkExperience {
  position: string;
  time: string;
  company: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  time: string;
}

export interface Certification {
  institution: string;
  title: string;
}
