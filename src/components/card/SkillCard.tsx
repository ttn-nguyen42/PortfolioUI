import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, OverlayTrigger, Popover } from 'react-bootstrap';
import s from './SkillCard.module.scss';

import { faStar, faWarning } from '@fortawesome/free-solid-svg-icons';
import Reveal from '../animate/Reveal';

const popover = (
  <Popover id='level-warning'>
    <Popover.Body>
      This indicates my level of interest in this technology and also the
      proficiency relative to other technologies that I have used
      <hr style={{ margin: '0.5rem 0' }} />
      <span style={{ display: 'block' }}>
        Mức độ này chỉ đánh giá sự yêu thích của tôi đối với công nghệ này và
        trình độ so với các công nghệ khác tôi đã sử dụng
      </span>
    </Popover.Body>
  </Popover>
);

export default function SkillCard({
  language,
  level,
  name,
  skills,
}: SkillCardProps) {
  return (
    <Reveal>
      <Card
        bg='light'
        text='dark'
        style={{ width: '100%', height: '100%' }}
        className={s['card']}
      >
        <Card.Header>{language}</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {level !== null ? (
            <Card.Subtitle
              className='text-muted'
              style={{
                display: 'flex',
                gap: '0.2rem',
                margin: '1rem 0',
                flexDirection: 'row',
                alignItems: 'start',
              }}
            >
              <FontAwesomeIcon
                icon={faStar}
                color={level! >= 1 ? '' : '#aebcc9'}
              />
              <FontAwesomeIcon
                icon={faStar}
                color={level! >= 2 ? '' : '#aebcc9'}
              />
              <FontAwesomeIcon
                icon={faStar}
                color={level! >= 3 ? '' : '#aebcc9'}
              />
              <FontAwesomeIcon
                icon={faStar}
                color={level! >= 4 ? '' : '#aebcc9'}
              />
              <FontAwesomeIcon
                icon={faStar}
                color={level! >= 5 ? '' : '#aebcc9'}
              />
              <OverlayTrigger
                key='overlay'
                trigger={['hover', 'focus']}
                placement='top'
                overlay={popover}
              >
                <FontAwesomeIcon icon={faWarning} className={'ms-3'} />
              </OverlayTrigger>
            </Card.Subtitle>
          ) : null}
          <ul className={s['list']}>
            {skills.map((skill: string) => (
              <li>
                <Card.Text>{skill}</Card.Text>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Reveal>
  );
}

export interface SkillCardProps {
  language: string;
  level: number | null;
  name: string;
  skills: string[];
}
