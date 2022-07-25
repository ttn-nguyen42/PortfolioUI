import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Info from '../info/Info';
import Navigation from '../navbar/Navigation';

import s from './PageTemplate.module.scss';

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <>
      <section className={s['wrapper']}>
        <Navigation />
        <Container className={s['body-wrapper']}>
          <div className={s['info']}>
            <Info />
          </div>
          <div className={s['content']}>{children}</div>
        </Container>
        <div className={s['footer']}>
          <Footer />
        </div>
      </section>
    </>
  );
}

export interface PageTemplateProps {
  children: React.ReactNode;
}
