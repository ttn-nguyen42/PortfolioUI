/* eslint-disable react/jsx-no-target-blank */
import s from './Info.module.scss';

import {
  faAt,
  faLocationArrow,
  faSpider,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';
import Reveal from '../animate/Reveal';
import IInfo from '../../models/Info';
import { ILinkPair } from '../points/Point';

export default function Info({ info }: InfoProps) {
  const openLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={s['body']}>
      <section className={s['mobile']}>
        <Reveal>
          <img src='./avatar.jpg' alt='Profile' className={s['profile']} />
        </Reveal>
        <Reveal>
          <div className={s['name-and-bio']}>
            <span className={s['name']}>{info.name}</span>
            <span className={s['bio']}>{info.shortBiography}</span>
          </div>
        </Reveal>
        <Reveal>
          <div className={s['linkedin-button']}>
            <Button variant='outline-secondary' size='sm'>
              <span>LinkedIn</span>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className={s['desktop']}>
        <div className={s['center-and-left-align']}>
          <Reveal>
            <img src='./avatar.jpg' alt='Profile' className={s['profile']} />
          </Reveal>
          <Reveal>
            <h5 className={s['name']}>{info.name}</h5>
          </Reveal>
          <Reveal>
            <span className={s['bio']}>{info.shortBiography}</span>
          </Reveal>
          <Reveal>
            <div className={s['icon-pair']}>
              <div className={s['icon']}>
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
              <span>{info.location}</span>
            </div>
          </Reveal>
          <Reveal>
            <div className={s['icon-pair'] + ' mb-3'}>
              <div className={s['icon']}>
                <FontAwesomeIcon icon={faAt} />
              </div>
              <span>{info.email}</span>
            </div>
          </Reveal>
          <Reveal>
            <div className={s['icon-pair']}>
              <div className={s['icon']}>
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <span
                className={s['link']}
                onClick={() => {
                  let link = info.links.find(
                    (val: ILinkPair) => val.name === 'GitHub'
                  )?.link;
                  if (link !== undefined) {
                    openLink(link!);
                  }
                }}
              >
                GitHub
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div className={s['icon-pair']}>
              <div className={s['icon']}>
                <FontAwesomeIcon icon={faGitlab} />
              </div>
              <span
                className={s['link']}
                onClick={() => {
                  let link = info.links.find(
                    (val: ILinkPair) => val.name === 'GitLab'
                  )?.link;
                  if (link !== undefined) {
                    openLink(link!);
                  }
                }}
              >
                GitLab
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div className={s['icon-pair']}>
              <div
                className={s['icon']}
                onClick={() => {
                  let link = info.links.find(
                    (val: ILinkPair) => val.name === 'LinkedIn'
                  )?.link;
                  if (link !== undefined) {
                    openLink(link!);
                  }
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <span className={s['link']}>LinkedIn</span>
            </div>
          </Reveal>
          <Reveal>
            <div className={s['icon-pair']}>
              <div className={s['icon']}>
                <FontAwesomeIcon icon={faSpider} />
              </div>
              <span
                className={s['link']}
                onClick={() => {
                  let link = info.links.find(
                    (val: ILinkPair) => val.name === 'Spiderum'
                  )?.link;
                  if (link !== undefined) {
                    openLink(link!);
                  }
                }}
              >
                Spiderum
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export interface InfoProps {
  info: IInfo;
}
