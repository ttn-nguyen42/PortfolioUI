import axios from 'axios';
import IAbout from '../models/AboutMe';
import IActivityList, { IActivity } from '../models/Activity';
import ICertificateList, { ICertificate } from '../models/Certificate';
import IInfo from '../models/Info';
import IProjectList, { IProject } from '../models/Project';
import { IResume } from '../models/Resume';
import http from './AxiosFactory';

export const ID: string = process.env['REACT_APP_PROFILE_ID']!;

export const getAvatarLink = (): string => {
  return `${process.env['REACT_APP_FILE_URL']}/${ID}/avatar.jpg`;
};

export const getResumeFileLink = (): string => {
  return `${process.env['REACT_APP_FILE_URL']}/${ID}/resume.pdf`;
};

export const getResumeData = async (): Promise<IResume | null> => {
  try {
    const { data } = await http.get<IResume>(`/resumes/${ID}`);
    console.log(data);
    return data;
  } catch {
    return null;
  }
};

export const getInfoData = async (): Promise<IInfo | null> => {
  try {
    const { data } = await http.get<IInfo>(`/resumes/${ID}/info`);
    return data;
  } catch {
    return null;
  }
};

export const getAboutData = async (): Promise<IAbout | null> => {
  try {
    const { data } = await http.get<IAbout>(`/resumes/${ID}/about`);
    return data;
  } catch {
    return null;
  }
};

export const getCertificateData =
  async (): Promise<ICertificateList | null> => {
    try {
      const { data } = await http.get<ICertificate[]>(
        `/resumes/${ID}/certificates`
      );
      return {
        certificates: data,
      };
    } catch {
      return null;
    }
  };

export const getProjectData = async (): Promise<IProjectList | null> => {
  try {
    const { data } = await http.get<IProject[]>(`/resumes/${ID}/projects`);
    return {
      projects: data,
    };
  } catch {
    return null;
  }
};

export const getActivityData = async (): Promise<IActivityList | null> => {
  try {
    const { data } = await http.get<IActivity[]>(`/resumes/${ID}/activities`);
    return {
      activities: data,
    };
  } catch {
    return null;
  }
};
