import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';
import s from './Footer.module.scss';
import Reveal from '../animate/Reveal';

export default function Footer() {
  return (
    <div className={s['content']}>
      <Container className={s['wrapper']}>
        <Reveal>
          <section className={s['additional-links']}>
            <span className={s['visit']}>SEE THIS PROJECT ON:</span>
            <div className={s['logo-text']}>
              <FontAwesomeIcon icon={faGithub} />
              <span className={s['text']}>{'PortfolioUI'}</span>
            </div>
            <div className={s['logo-text']}>
              <FontAwesomeIcon icon={faGithub} />
              <span className={s['text']}>{'PortfolioAPI'}</span>
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className={s['license']}>
            © 2022 Nguyen Tran on MIT License. Powered by React and ASP.NET Core
            Web API.
          </section>
        </Reveal>
      </Container>
    </div>
  );
}
