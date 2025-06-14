export interface ResponseCollection {
  profile: ProfileCollection;
}

export interface ProfileCollection {
  fullName: string;
  shortName: string;
  title: string;
  social: SosialMediaCollection;
  contact: ContactCollection;
  count: CountCollection;
  aboutMe: string;
  resumeLink: string;
  coreSkills: string[];
  tools: string[];
  education: EducationCollection[];
  experience: ExperienceCollection[];
  award: { title: string; description: string }[];
  latestWork: LatestWorkCollection[];
}

export interface LatestWorkCollection {
  title: string;
  description: string;
  link: string;
  picture: string;
}

export interface ExperienceCollection {
  period: string;
  location: string;
  title: string;
  description: string[];
}

export interface EducationCollection {
  period: string;
  location: string;
  title: string;
  value: string;
}

export interface SosialMediaCollection {
  linkedin: string;
}

export interface ContactCollection {
  whatsapps: string;
  phone: string;
}

export interface CountCollection {
  experience: number;
  projects: number;
  client: number;
}
