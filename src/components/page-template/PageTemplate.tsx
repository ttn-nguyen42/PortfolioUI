import React from 'react';
import Footer from '../footer/Footer';
import Info from '../info/Info';
import Navigation from '../navbar/Navigation';

import s from './PageTemplate.module.scss';

export default function PageTemplate({ children, loading }: PageTemplateProps) {
  return (
    <>
      <section className={s['wrapper']}>
        <Navigation />
        {loading === true ? <div></div> : null}
        {loading === false || loading === undefined ? (
          <>
            <div className={s['body-wrapper']}>
              <div className={s['info']}>
                <Info />
              </div>
              <div className={s['content']}>{children}</div>
            </div>
            <div className={s['footer']}>
              <Footer />
            </div>
          </>
        ) : null}
      </section>
    </>
  );
}

export interface PageTemplateProps {
  children: React.ReactNode;
  loading?: boolean;
}
