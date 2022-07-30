import { ILinkPair } from '../components/points/Point';

/*
 * Info model
 */
export default interface IInfo {
  name: string;
  shortBiography: string;
  location: string;
  email: string;
  links: ILinkPair[];
}
