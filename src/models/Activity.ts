/*
 * Activities model
 */

import { LinkPair } from '../components/points/Point';

export default interface Activity {
  name: string;
  time: string;
  organizer: string;
  overview: string;
  descriptions: ActivityDescription[];
  links: LinkPair[];
  type: ActivityType;
}

export interface ActivityDescription {
  description: string;
}

export interface ActivityType {
  name: string;
}
