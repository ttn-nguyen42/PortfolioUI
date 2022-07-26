import React from 'react';
import s from './PageTitle.module.scss';

export default function PageTitle({ children }: PageTitleProps) {
  return <h2 className={s['title']}>{children}</h2>;
}

export interface PageTitleProps {
  children: React.ReactNode;
}
