import Reveal from '../animate/Reveal';
import { LinkPair } from '../points/Point';

import s from './Link.module.scss';

export default function Link({ link }: LinkComponentInterface) {
  return (
    <Reveal>
      <div className={s['link-wrapper']}>
        {'['}
        <a href={link.link} target='_blank' rel='noreferrer'>
          {link.name}
        </a>
        {']'}
      </div>
    </Reveal>
  );
}

export interface LinkComponentInterface {
  link: LinkPair;
}
