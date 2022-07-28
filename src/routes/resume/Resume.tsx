import { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import Reveal from '../../components/animate/Reveal';
import SkillCard from '../../components/card/SkillCard';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';

import s from './Resume.module.scss';

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume';
  });
  return (
    <PageTemplate>
      <PageTitle>Resume</PageTitle>
      <PagePoint title={'Technical Skills'}>
        <Reveal>
          <Accordion>
            <Accordion.Item eventKey='0'>
              <Reveal>
                <Accordion.Header>Back-end Development</Accordion.Header>
                <Accordion.Body>
                  <div className={s['group']}>
                    <SkillCard
                      level={5}
                      language={'C#'}
                      name={'ASP.NET Core Web API'}
                      skills={[
                        'MVC architecture and Repository pattern',
                        'Entity Framework with Microsoft SQL & MySQL',
                        'JWT authentication',
                        'SignalR real-time API',
                      ]}
                    />
                    <SkillCard
                      level={5}
                      language={'Java'}
                      name={'Spring Boot'}
                      skills={[
                        'MVC architecture with Repository & Service pattern',
                        'Hibernate & JPA with MySQL, PostgreSQL',
                        'MongoDB with JPA',
                        'OAuth 2.0 JWT authentication with Spring Security',
                      ]}
                    />
                    <SkillCard
                      level={2}
                      language={'TypeScript'}
                      name={'NestJS'}
                      skills={[
                        'MVC architecture with Repository & Service pattern',
                        'TypeORM with MySQL',
                        'Session-based authentication',
                      ]}
                    />
                  </div>
                </Accordion.Body>
              </Reveal>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Reveal>
                <Accordion.Header>Front-end Development</Accordion.Header>
                <Accordion.Body>
                  <div className={s['group']}>
                    <SkillCard
                      level={4}
                      language={'TypeScript'}
                      name={'React'}
                      skills={[
                        'Navigation with React Router',
                        'State management with RxJS, MobX, Redux Toolkit',
                        'Firebase Firestore integration',
                        'HTTP with Fetch API or Axios',
                        'Various UI libraries (MUI, Bootstrap, SwiperJS,...)',
                      ]}
                    />
                    <SkillCard
                      level={2}
                      language={'TypeScript'}
                      name={'Svelte & SvelteKit'}
                      skills={[
                        'Navigation with file-based routing',
                        'HTTP with Fetch API or Axios',
                      ]}
                    />
                  </div>
                </Accordion.Body>
              </Reveal>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Reveal>
                <Accordion.Header>Mobile Development</Accordion.Header>
                <Accordion.Body>
                  <div className={s['group']}>
                    <SkillCard
                      language={'Dart'}
                      level={5}
                      name={'Flutter'}
                      skills={[
                        'Reactive programming with RxDart and BLoC',
                        'Firebase Analytics and Firestore integration',
                        'HTTP with Dio & Retrofit',
                      ]}
                    />
                    <SkillCard
                      language={'Kotlin & Java'}
                      level={4}
                      name={'Android'}
                      skills={[
                        'MVVM and MVC architecture',
                        'Reactive programming with RxJava, Observer pattern',
                        'Firebase Firestore integration',
                        'HTTP with Retrofit, GJSON and Repository pattern',
                      ]}
                    />
                  </div>
                </Accordion.Body>
              </Reveal>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Reveal>
                <Accordion.Header>Others</Accordion.Header>
                <Accordion.Body>
                  <div className={s['group']}>
                    <SkillCard
                      level={null}
                      language={'Management'}
                      name={'Management Tools'}
                      skills={[
                        'Jira & Confluence',
                        'Notion',
                        'Slack, Microsoft Teams',
                        'Messenger, Zoom, Google Meets',
                      ]}
                    />
                    <SkillCard
                      level={null}
                      language={'Technical'}
                      name={'Technical Tools'}
                      skills={[
                        'Git, GitHub, GitLab',
                        'Zeplin, XD, Figma, Balsamiq',
                        'Basic daily Linux usage (Ubuntu, Debian)',
                        'Docker & Docker Compose',
                        'VSCode, Visual Studio, JetBrains IDEs, Android Studio',
                        'Google, Stack Overflow, Medium',
                      ]}
                    />
                  </div>
                </Accordion.Body>
              </Reveal>
            </Accordion.Item>
          </Accordion>
        </Reveal>
      </PagePoint>
      <div style={{ marginBottom: '1.5rem' }} />
      <PagePoint title={'Experience'}>
        <Point
          title={'Mobile Engineer'}
          descriptionOne={'BENIT'}
          note={'Dec 2021 - Jun 2022'}
        >
          <Subpoint>
            <span>{'Develop mobile applications using Flutter & Dart'}</span>
          </Subpoint>
          <Subpoint>
            <span>
              {
                'Participate in full Agile development cycles, feature planning and UI design process'
              }
            </span>
          </Subpoint>
        </Point>
        <Point
          title={'ESL (English as a Second Language) Teacher'}
          descriptionOne={'Lingo English Center'}
          note={'Mar 2021 - Nov 2021'}
        >
          <Subpoint>
            <span>Help students prepare for the IELTS examination</span>
          </Subpoint>
          <Subpoint>
            <span>
              {
                'Taught communication English for students from all backgrounds (engineers, teachers,...)'
              }
            </span>
          </Subpoint>
        </Point>
      </PagePoint>
      <PagePoint title={'Education'}>
        <Point
          title={'Ho Chi Minh City University of Technology'}
          descriptionOne={'Bachelor (BSc) in Computer Engineering'}
          note={'2020 - 2024'}
        >
          <Subpoint>
            <span>
              Major in Software Engineering and Internet of Things Development
            </span>
          </Subpoint>
          <Subpoint>
            <span>cGPA of 7.63/10</span>
          </Subpoint>
        </Point>
        <Point
          title={'Chu Van An High School'}
          descriptionOne={'International A-Level Program'}
          note={'2017 - 2020'}
        >
          <Subpoint>
            <span>
              Studied A-Level Mathematics, Physics, Chemistry and Economics
            </span>
          </Subpoint>
        </Point>
      </PagePoint>

      <PagePoint title={'Volunteering'}>
        <Point
          title={'Associate Assistant'}
          descriptionOne={'Chu Van An High School Library'}
          note={'Nov 2017 - Jul 2020'}
        >
          <Subpoint>
            <span>{'Maintain the library computer systems'}</span>
          </Subpoint>
          <Subpoint>
            <span>
              {'Perform frequent updates for the library management system'}
            </span>
          </Subpoint>
          <Subpoint>
            <span>{'Organize and operate events by the library'}</span>
          </Subpoint>
        </Point>
        <Point
          title={'Media Specialist'}
          descriptionOne={'OISP Volunteer Club'}
          note={'Nov 2021 - now'}
        >
          <Subpoint>
            <span>
              {
                "Write social media posts for the club's various social activities & events"
              }
            </span>
          </Subpoint>
          <Subpoint>
            <span>
              {
                'Participate in multiple planning of social activities of the club'
              }
            </span>
          </Subpoint>
        </Point>
        <Point
          title={'Team Leader'}
          descriptionOne={'High School Help Kit'}
          note={'Feb 2020 - Mar 2022'}
        >
          <Subpoint>
            <span>
              {
                'Write academic articles for secondary school students to revise for the national examination'
              }
            </span>
          </Subpoint>
          <Subpoint>
            <span>{'Deliver monthly plans for the team'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Provide supports and advise for team members'}</span>
          </Subpoint>
        </Point>
      </PagePoint>
      <PagePoint title={'Qualifications'}>
        <Point title={'IELTS'} descriptionOne={'IDP Vietnam'} note={'7.0'}>
          <Subpoint>
            <span>{'Reading & Listening: 7.5'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Writing & Speaking: 6.5'}</span>
          </Subpoint>
        </Point>
      </PagePoint>
    </PageTemplate>
  );
}
