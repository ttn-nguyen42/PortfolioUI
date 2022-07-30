import { ILinkPair } from '../components/points/Point';

/*
 * Project models
 */

export default interface IProjectList {
  projects: IProject[];
  repositories: ILinkPair[];
}

export interface IProject {
  name: string;
  role: string;
  team: string;
  overview: string;
  descriptions: IProjectDescription[];
  links: ILinkPair[];
  type: IProjectType;
}

export interface IProjectDescription {
  description: string;
}

export interface IProjectType {
  name: string;
}
