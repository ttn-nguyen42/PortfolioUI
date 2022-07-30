/*
 * Technical skills models
 */
export interface TechnicalSkill {
  language: string;
  name: string;
  proficiency: number | null;
  skills: TechnicalSkillDescription[];
  type: TechnicalSkillType;
}

export interface TechnicalSkillType {
  name: string;
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
  descriptions: EducationDescription[];
  average: number | null;
}

export interface EducationDescription {
  description: string;
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
export interface Qualification {
  name: string;
  issuer: string;
  score: number | null;
  descriptions: QualificationDescription[];
}

export interface QualificationDescription {
  description: string;
}
