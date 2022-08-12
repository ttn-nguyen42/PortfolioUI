/*
 * Activities model
 */

import { ILinkPair } from '../components/points/Point';

export default interface IActivityList {
  activities: IActivity[];
}

export interface IActivity {
  name: string;
  organizer: string;
  overview: string;
  descriptions: IActivityDescription[];
  links: ILinkPair[];
  type: IActivityType;
}

export interface IActivityDescription {
  description: string;
}

export interface IActivityType {
  name: string;
}
