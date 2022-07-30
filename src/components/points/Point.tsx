import React from 'react';
import Reveal from '../animate/Reveal';
import Link from '../link/Link';
import s from './Point.module.scss';

export interface PointProps {
  children?: React.ReactNode | React.ReactNode[];
  title: string;
  note?: string;
  descriptionOne: string;
  descriptionTwo?: string;
  links?: ILinkPair[];
}

export interface ILinkPair {
  name: string;
  link: string;
}

export default function Point({
  children,
  title,
  note,
  descriptionOne,
  descriptionTwo,
  links,
}: PointProps) {
  return (
    <>
      <Reveal>
        <span className={s['title']}>{title}</span>
      </Reveal>
      {note === undefined ? null : (
        <Reveal>
          <span className={s['time']}>{' ' + note}</span>
        </Reveal>
      )}
      <Reveal>
        <div className={s['description-one']}>
          <span>{descriptionOne}</span>
        </div>
      </Reveal>
      {descriptionTwo === undefined ? null : (
        <Reveal>
          <div className={s['description-two']}>
            <span>{descriptionTwo}</span>
          </div>
        </Reveal>
      )}
      {children === undefined ? null : (
        <Reveal>
          <div className={s['bullets']}>
            <ul>{children}</ul>
          </div>
        </Reveal>
      )}
      {links === null || links === undefined || links.length === 0 ? null : (
        <div className={s['links']}>
          {links?.map((link: ILinkPair) => (
            <Reveal>
              <Link link={link} />
            </Reveal>
          ))}
        </div>
      )}
      <div className={s['bottom-margin']}></div>
    </>
  );
}
