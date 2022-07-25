import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';
import s from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={s['content']}>
      <Container className={s['wrapper']}>
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
        <section className={s['license']}>
          © 2022 Nguyen Tran on MIT License. Powered by React and ASP.NET Core
          Web API.
        </section>
      </Container>
    </div>
  );
}
