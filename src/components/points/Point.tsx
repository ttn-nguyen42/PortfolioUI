import React from 'react';
import s from './Point.module.scss';

export interface PointProps {
  children?: React.ReactNode | React.ReactNode[];
  title: string;
  note?: string;
  descriptionOne: string;
  descriptionTwo?: string;
  links?: LinkPair[];
}

export interface LinkPair {
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
      <span className={s['title']}>{title}</span>
      {note === null ? null : <span className={s['time']}>{' ' + note}</span>}
      <div className={s['description-one']}>
        <span>{descriptionOne}</span>
      </div>
      {descriptionTwo === null ? null : (
        <div className={s['description-two']}>
          <span>{descriptionTwo}</span>
        </div>
      )}
      {children === null ? null : (
        <div
          className={s['bullets'] + ' ' + (links === null ? '' : s['margin'])}
        >
          <ul>{children}</ul>
        </div>
      )}
      {links === null || links === undefined || links.length === 0 ? null : (
        <div className={s['links']}>
          {links?.map((link: LinkPair) => (
            <span>
              {'['}
              <a href={link.link} target='_blank' rel='noreferrer'>
                {link.name}
              </a>
              {']'}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
