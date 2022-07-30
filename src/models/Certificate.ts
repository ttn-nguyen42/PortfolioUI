import { ILinkPair } from '../components/points/Point';

/*
 * Certificate model
 */
export default interface ICertificateList {
  certificates: ICertificate[];
}

export interface ICertificate {
  name: string;
  time: string;
  issuer: string;
  instructor: string;
  descriptions: ICertificateDescription[];
  links: ILinkPair[];
  type: ICertificateType;
}

export interface ICertificateDescription {
  description: string;
}

export interface ICertificateType {
  name: string;
}
