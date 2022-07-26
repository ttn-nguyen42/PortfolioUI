import s from './PagePoint.module.scss';
import Point from '../page-point/PagePoint';
import React from 'react';

export default function PagePoint({ children, title }: PagePointProps) {
  return (
    <div className={s['point']}>
      <h5 className={s['title']}>{title}</h5>
      <hr className={s['divider']} />
      {children}
    </div>
  );
}

export interface PagePointProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
}
