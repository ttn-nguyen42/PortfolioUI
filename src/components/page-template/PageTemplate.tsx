import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import IInfo from '../../models/Info';
import Reveal from '../animate/Reveal';
import Footer from '../footer/Footer';
import Info from '../info/Info';
import Navigation from '../navbar/Navigation';

import s from './PageTemplate.module.scss';

export default function PageTemplate({
  children,
  loading,
  info,
}: PageTemplateProps) {
  return (
    <>
      <section className={s['wrapper']}>
        <Navigation />

        <div className={s['body-wrapper']}>
          {loading === false || loading === undefined ? (
            <>
              <div className={s['info']}>
                <Info info={info} />
              </div>
              <div className={s['content']}>{children}</div>
            </>
          ) : null}
          {loading === null ? (
            <div className={s['error']}>
              <Reveal>
                <Alert variant='danger'>
                  Website is unavailable, please try again later!
                </Alert>
              </Reveal>
            </div>
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
  loading?: boolean | null;
  info: IInfo;
}
