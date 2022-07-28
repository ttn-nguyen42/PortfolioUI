import { LinkPair } from '../points/Point';

import s from './Link.module.scss';

export default function Link({ link }: LinkComponentInterface) {
  return (
    <div className={s['link-wrapper']}>
      {'['}
      <a href={link.link} target='_blank' rel='noreferrer'>
        {link.name}
      </a>
      {']'}
    </div>
  );
}

export interface LinkComponentInterface {
  link: LinkPair;
}
