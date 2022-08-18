/*
 * Resume models
 */
export interface IResume {
  skills: ITechnicalSkill[];
  experience: IExperience[];
  education: IEducation[];
  volunteering: IVolunteering[];
  qualification: IQualification[];
}

/*
 * Technical skills models
 */
export interface ITechnicalSkill {
  language: string;
  name: string;
  proficiency: number | null;
  skills: ITechnicalSkillDescription[];
  type: ITechnicalSkillType;
}

export interface ITechnicalSkillType {
  name: string;
}

export interface ITechnicalSkillDescription {
  description: string;
}

/*
 * Experience models
 */
export interface IExperience {
  title: string;
  company: string;
  from: string;
  to: string;
  descriptions: IExperienceDescription[];
}

export interface IExperienceDescription {
  description: string;
}

/*
 * Education models
 */
export interface IEducation {
  school: string;
  major: string;
  from: string;
  to: string;
  descriptions: IEducationDescription[];
  average: number | null;
}

export interface IEducationDescription {
  description: string;
}

/*
 * Volunteering models
 */
export interface IVolunteering {
  title: string;
  organization: string;
  from: string;
  to: string | null;
  descriptions: IVolunteeringDescription[];
}

export interface IVolunteeringDescription {
  description: string;
}

/*
 * Qualification models
 */
export interface IQualification {
  name: string;
  issuer: string;
  score: number | null;
  descriptions: IQualificationDescription[];
}

export interface IQualificationDescription {
  description: string;
}
