import s from './PagePoint.module.scss';
import React from 'react';
import Reveal from '../animate/Reveal';

export default function PagePoint({ children, title }: PagePointProps) {
  return (
    <div className={s['point']}>
      <Reveal>
        <h5 className={s['title']}>{title}</h5>
        <hr className={s['divider']} />
      </Reveal>
      {children}
    </div>
  );
}

export interface PagePointProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
}
