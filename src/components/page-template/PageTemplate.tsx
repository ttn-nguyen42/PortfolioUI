import React from 'react';
import { Spinner } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Info from '../info/Info';
import Navigation from '../navbar/Navigation';

import s from './PageTemplate.module.scss';

export default function PageTemplate({ children, loading }: PageTemplateProps) {
  return (
    <>
      <section className={s['wrapper']}>
        <Navigation />

        <div className={s['body-wrapper']}>
          {loading === false || loading === undefined ? (
            <>
              <div className={s['info']}>
                <Info />
              </div>
              <div className={s['content']}>{children}</div>
            </>
          ) : null}
          {loading === true ? (
            <div className={s['spinner']}>
              <Spinner variant='dark' animation='grow' />
            </div>
          ) : null}
        </div>
        <div className={s['footer']}>
          <Footer />
        </div>
      </section>
    </>
  );
}

export interface PageTemplateProps {
  children: React.ReactNode;
  loading?: boolean;
}
