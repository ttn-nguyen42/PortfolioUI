/* eslint-disable react/jsx-no-target-blank */
import s from './Info.module.scss';

import {
  faAt,
  faLocationArrow,
  faMailBulk,
  faMailForward,
  faMailReply,
  faSpider,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';

export default function Info() {
  const openLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className={s['body']}>
      <section className={s['mobile']}>
        <img src='./avatar.jpg' alt='Profile' className={s['profile']} />
        <div className={s['name-and-bio']}>
          <span className={s['name']}>Nguyen Tran</span>
          <span className={s['bio']}>
            3rd year Computer Engineering student. Interested in back-end and
            mobile development.
          </span>
        </div>
        <div className={s['linkedin-button']}>
          <Button variant='outline-secondary' size='sm'>
            <span>LinkedIn</span>
          </Button>
        </div>
      </section>
      <section className={s['desktop']}>
        <div className={s['center-and-left-align']}>
          <img src='./avatar.jpg' alt='Profile' className={s['profile']} />
          <h5 className={s['name']}>Nguyen Tran</h5>
          <span className={s['bio']}>
            3rd year Computer Engineering student. Interested in back-end and
            mobile development.
          </span>
          <div className={s['icon-pair']}>
            <div className={s['icon']}>
              <FontAwesomeIcon icon={faLocationArrow} />
            </div>
            <span>Ho Chi Minh City, Vietnam</span>
          </div>
          <div className={s['icon-pair']}>
            <div className={s['icon']}>
              <FontAwesomeIcon icon={faAt} />
            </div>
            <span>ttn.nguyen42@gmail.com</span>
          </div>
          <div className={s['icon-pair']}>
            <div className={s['icon']}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <span
              className={s['link']}
              onClick={() => {
                openLink('https://github.com');
              }}
            >
              GitHub
            </span>
          </div>
          <div className={s['icon-pair']}>
            <div className={s['icon']}>
              <FontAwesomeIcon icon={faGitlab} />
            </div>
            <span
              className={s['link']}
              onClick={() => {
                openLink('https://github.com');
              }}
            >
              GitLab
            </span>
          </div>
          <div className={s['icon-pair']}>
            <div
              className={s['icon']}
              onClick={() => {
                openLink('https://github.com');
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <span className={s['link']}>LinkedIn</span>
          </div>
          <div className={s['icon-pair']}>
            <div className={s['icon']}>
              <FontAwesomeIcon icon={faSpider} />
            </div>
            <span
              className={s['link']}
              onClick={() => {
                openLink('https://github.com');
              }}
            >
              Spiderum
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
