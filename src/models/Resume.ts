/*
 * Technical skills models
 */
export interface TechnicalSkill {
  language: string;
  name: string;
  proficiency?: number;
  skills: TechnicalSkillDescription[];
  type: TechnicalSkillType;
}

export enum TechnicalSkillType {
  BACKEND,
  FRONTEND,
  MOBILE,
  OTHERS,
}

export interface TechnicalSkillDescription {
  description: string;
}

/*
 * Experience models
 */
export interface Experience {
  title: string;
  company: string;
  from: string;
  to: string;
  descriptions: ExperienceDescription[];
}

export interface ExperienceDescription {
  description: string;
}

/*
 * Education models
 */
export interface Education {
  school: string;
  major: string;
  from: string;
  to: string;
  description: string;
  average: number;
}

/*
 * Volunteering models
 */
export interface Volunteering {
  title: string;
  organization: string;
  from: string;
  to: string;
  descriptions: VolunteeringDescription[];
}

export interface VolunteeringDescription {
  description: string;
}

/*
 * Qualification models
 */
export interface Qualifications {
  name: string;
  issuer: string;
  score?: number;
  descriptions: QualificationDescription[];
}

export interface QualificationDescription {
  description: string;
}
