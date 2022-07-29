import { LinkPair } from '../components/points/Point';

/*
 * Project models
 */
export default interface Project {
  name: string;
  role: string;
  team: string;
  overview: string;
  descriptions: ProjectDescription[];
  links: LinkPair[];
  type: ProjectType;
}

export interface ProjectDescription {
  description: string;
}

export interface ProjectType {
  name: string;
}
