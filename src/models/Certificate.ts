import { LinkPair } from '../components/points/Point';

/*
 * Certificate model
 */
export default interface Certificate {
  name: string;
  time: string;
  issuer: string;
  instructor: string;
  descriptions: CertificateDescription[];
  links: LinkPair;
}

export interface CertificateDescription {
  description: string;
}

export enum CertificateType {
  BACKEND,
  FRONTEND,
  MOBILE,
  LANGUAGE,
  OTHERS,
}
