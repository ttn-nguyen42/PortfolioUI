import React from 'react';
import s from './PageTitle.module.scss';

export default function PageTitle({ children }: PageTitleProps) {
  return <h3 className={s['title']}>{children}</h3>;
}

export interface PageTitleProps {
  children: React.ReactNode;
}
