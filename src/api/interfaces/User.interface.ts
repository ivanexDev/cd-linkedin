export interface Certification {
  authority: string;
  issued: string;
  name: string;
  url: string;
}

export interface Education {
  activities: string;
  date_range: string;
  degree: string;
  end_month: string;
  end_year: number;
  field_of_study: string;
  school: string;
  school_id: string;
  school_linkedin_url: string;
  school_logo_url: string;
  start_month: string;
  start_year: number;
}

export interface Experience {
  company: string;
  company_id: string;
  company_linkedin_url: string;
  company_logo_url: string;
  company_public_url: string;
  date_range: string;
  description: string;
  duration: string;
  end_month: string;
  end_year: string;
  is_current: boolean;
  job_type: string;
  location: string;
  skills: string;
  start_month: number;
  start_year: number;
  title: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Profile_statu {
  contact_info_updated: string;
  joined_date: string;
  profile_photo_updated: string;
  verified: boolean;
}

export interface Volunteer {
  company: string;
  company_linkedin_url: string;
  date_range: string;
  description?: any;
  duration: string;
  title: string;
  topic?: any;
}

export interface Data {
  about: string;
  certifications: Certification[];
  city: string;
  company: string;
  company_description: string;
  company_domain: string;
  company_employee_range: string;
  company_industry: string;
  company_linkedin_url: string;
  company_logo_url: string;
  company_website: string;
  company_year_founded: number;
  connection_count: number;
  country: string;
  courses: any[];
  current_company_join_month: number;
  current_company_join_year: number;
  current_job_duration: string;
  educations: Education[];
  email: string;
  experiences: Experience[];
  first_name: string;
  follower_count: number;
  full_name: string;
  headline: string;
  honors_and_awards: any[];
  hq_city: string;
  hq_country: string;
  hq_region: string;
  is_creator: boolean;
  is_influencer: boolean;
  is_premium: boolean;
  is_verified: boolean;
  job_title: string;
  languages: Language[];
  last_name: string;
  linkedin_url: string;
  location: string;
  organizations: any[];
  patents: any[];
  phone: string;
  profile_id: string;
  profile_image_url: string;
  profile_status: Profile_statu;
  projects: any[];
  public_id: string;
  publications: any[];
  school: string;
  skills: string;
  state: string;
  urn: string;
  volunteers: Volunteer[];
}

export interface User {
  data: Data;
  message: string;
}
