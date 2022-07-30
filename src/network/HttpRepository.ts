import IAbout from '../models/AboutMe';
import IActivityList from '../models/Activity';
import ICertificateList from '../models/Certificate';
import IInfo from '../models/Info';
import IProjectList from '../models/Project';
import { IResume } from '../models/Resume';
import http from './AxiosFactory';
import {
  aboutModel,
  activitiesModel,
  certificatesModel,
  educationsModel,
  experiencesModel,
  infoModel,
  projectsModel,
  qualificationsModel,
  repositoryLinksModel,
  technicalSkillsModel,
  volunteeringModel,
} from './Dummy';

export const getResumeData = async (): Promise<IResume> => {
  return {
    skills: technicalSkillsModel,
    experience: experiencesModel,
    education: educationsModel,
    volunteering: volunteeringModel,
    qualification: qualificationsModel,
  };
};

export const getInfoData = async (): Promise<IInfo> => {
  return infoModel;
};

export const getAboutData = async (): Promise<IAbout> => {
  return aboutModel;
};

export const getCertificateData = async (): Promise<ICertificateList> => {
  return {
    certificates: certificatesModel,
  };
};

export const getProjectData = async (): Promise<IProjectList> => {
  return {
    projects: projectsModel,
    repositories: repositoryLinksModel,
  };
};

export const getActivityData = async (): Promise<IActivityList> => {
  return {
    activities: activitiesModel,
  };
};
