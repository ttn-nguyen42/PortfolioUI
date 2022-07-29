import { LinkPair } from '../components/points/Point';

/*
 * Info model
 */
export default interface Info {
  name: string;
  shortBiography: string;
  location: string;
  email: string;
  links: LinkPair[];
}
