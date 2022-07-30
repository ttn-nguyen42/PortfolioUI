import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Reveal from '../../components/animate/Reveal';
import SkillCard from '../../components/card/SkillCard';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';
import {
  Education,
  EducationDescription,
  Experience,
  ExperienceDescription,
  Qualification,
  QualificationDescription,
  TechnicalSkill,
  TechnicalSkillDescription,
  Volunteering,
  VolunteeringDescription,
} from '../../models/Resume';

import s from './Resume.module.scss';

const technicalSkills: TechnicalSkill[] = [
  {
    language: 'C#',
    name: 'ASP.NET Core Web API',
    proficiency: 5,
    skills: [
      { description: 'MVC architecture and Repository pattern' },
      { description: 'Entity Framework with Microsoft SQL & MySQL' },
      { description: 'JWT authentication' },
      { description: 'SignalR real-time API' },
    ],
    type: {
      name: 'Back-end Development',
    },
  },
  {
    language: 'Java',
    name: 'Spring Boot',
    proficiency: 5,
    skills: [
      { description: 'MVC architecture with Repository & Service pattern' },
      { description: 'Hibernate & JPA with MySQL, PostgreSQL' },
      { description: 'MongoDB with JPA' },
      { description: 'OAuth 2.0 JWT authentication with Spring Security' },
    ],
    type: {
      name: 'Back-end Development',
    },
  },
  {
    language: 'TypeScript',
    name: 'NestJS',
    proficiency: 2,
    skills: [
      { description: 'MVC architecture with Repository & Service pattern' },
      { description: 'TypeORM with MySQL' },
      { description: 'Session-based authentication' },
    ],
    type: {
      name: 'Back-end Development',
    },
  },
  {
    language: 'TypeScript',
    name: 'React',
    proficiency: 4,
    skills: [
      { description: 'Navigation with React Router' },
      { description: 'State management with RxJS, MobX, Redux Toolkit' },
      { description: 'Firebase Firestore integration' },
      { description: 'HTTP with Fetch API or Axios' },
      { description: 'Various UI libraries (MUI, Bootstrap, SwiperJS,...)' },
    ],
    type: {
      name: 'Front-end Development',
    },
  },
  {
    language: 'TypeScript',
    name: 'Svelte & SvelteKit',
    proficiency: 2,
    skills: [
      { description: 'Navigation with file-based routing' },
      { description: 'HTTP with Fetch API or Axios' },
    ],
    type: {
      name: 'Front-end Development',
    },
  },
  {
    language: 'Dart',
    name: 'Flutter',
    proficiency: 5,
    skills: [
      { description: 'Reactive programming with RxDart and BLoC' },
      { description: 'Firebase Analytics and Firestore integration' },
      { description: 'HTTP with Dio & Retrofit' },
    ],
    type: {
      name: 'Mobile Development',
    },
  },
  {
    language: 'Kotlin & Java',
    name: 'Android',
    proficiency: 3,
    skills: [
      { description: 'MVVM and MVC architecture' },
      { description: 'Reactive programming with RxJava, Observer pattern' },
      { description: 'Firebase Firestore integration' },
      { description: 'HTTP with Retrofit, GJSON and Repository pattern' },
    ],
    type: {
      name: 'Mobile Development',
    },
  },
  {
    language: 'Management',
    name: 'Management Tools',
    proficiency: null,
    skills: [
      { description: 'Jira & Confluence' },
      { description: 'Notion' },
      { description: 'Slack, Microsoft Teams' },
      { description: 'Messenger, Zoom, Google Meets' },
    ],
    type: {
      name: 'Others',
    },
  },

  {
    language: 'Technical',
    name: 'Technical Tools',
    proficiency: null,
    skills: [
      { description: 'Git, GitHub, GitLab' },
      { description: 'Zeplin, XD, Figma, Balsamiq' },
      { description: 'Basic daily Linux usage (Ubuntu, Debian)' },
      { description: 'Docker & Docker Compose' },
      { description: 'VSCode, Visual Studio, JetBrains IDEs, Android Studio' },
      { description: 'Google, Stack Overflow, Medium' },
    ],
    type: {
      name: 'Others',
    },
  },
];

const experiencesModel: Experience[] = [
  {
    title: 'Mobile Engineer',
    company: 'BENIT',
    from: 'Dec 2021',
    to: 'Jun 2022',
    descriptions: [
      {
        description: 'Develop mobile applications using Flutter & Dart',
      },
      {
        description:
          'Participate in full Agile development cycles, feature planning and UI design process',
      },
    ],
  },
  {
    title: 'ESL (English as a Second Language) Teacher',
    company: 'Lingo English Center',
    from: 'Mar 2021',
    to: 'Nov 2021',
    descriptions: [
      {
        description: 'Help students prepare for the IELTS examination',
      },
      {
        description:
          'Taught communication English for students from all backgrounds (engineers, teachers,...)',
      },
    ],
  },
];

const educationsModel: Education[] = [
  {
    school: 'Ho Chi Minh City University of Technology',
    major: 'Bachelor (BSc) in Computer Engineering',
    from: '2020',
    to: '2024',
    descriptions: [
      {
        description:
          'Major in Software Engineering and Internet of Things Development',
      },
    ],
    average: 7.63,
  },
  {
    school: 'Chu Van An High School',
    major: 'International A-Level Program',
    from: '2017',
    to: '2020',
    descriptions: [
      {
        description:
          'Studied A-Level Mathematics, Physics, Chemistry and Economics',
      },
    ],
    average: null,
  },
];

const volunteeringModel: Volunteering[] = [
  {
    title: 'Associate Assistant',
    organization: 'Chu Van An High School Library',
    from: 'Nov 2017',
    to: 'Jul 2020',
    descriptions: [
      { description: 'Maintain the library computer systems' },
      {
        description:
          "Write social media posts for the club's various social activities & events",
      },
      {
        description:
          'Perform frequent updates for the library management system',
      },
      { description: 'Organize and operate events by the library' },
    ],
  },
  {
    title: 'Media Specialist',
    organization: 'OISP Volunteer Club',
    from: 'Nov 2021',
    to: 'now',
    descriptions: [
      {
        description:
          'Participate in multiple planning of social activities of the club',
      },
      {
        description:
          "Write social media posts for the club's various social activities & events",
      },
    ],
  },
  {
    title: 'Team Leader',
    organization: 'High School Help Kit',
    from: 'Nov 2020',
    to: 'Mar 2022',
    descriptions: [
      {
        description:
          'Write academic articles for secondary school students to revise for the national examination',
      },
      {
        description: 'Deliver monthly plans for the team',
      },
      {
        description: 'Provide supports and advise for team members',
      },
    ],
  },
];

const qualificationsModel: Qualification[] = [
  {
    name: 'IELTS',
    issuer: 'IDP Vietnam',
    score: 7.0,
    descriptions: [
      { description: 'Reading & Listening: 7.5' },
      { description: 'Writing & Speaking: 6.5' },
    ],
  },
];

export default function Resume() {
  const [technical, setTechnical] = useState<any>({});
  const [experiences, setExperience] = useState<Experience[]>([]);
  const [educations, setEducation] = useState<Education[]>([]);
  const [volunteer, setVolunteer] = useState<Volunteering[]>([]);
  const [qualifications, setQualifications] = useState<Qualification[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Resume';
    setLoading(true);
    // Fetch from API
    let classifyTechnical: any = {};
    technicalSkills.forEach((skill: TechnicalSkill) => {
      if (classifyTechnical[skill.type.name] === undefined) {
        classifyTechnical[skill.type.name] = [skill];
      } else {
        classifyTechnical[skill.type.name] = [
          ...classifyTechnical[skill.type.name],
          skill,
        ];
      }
    });
    setExperience(experiencesModel);
    setTechnical(classifyTechnical);
    setEducation(educationsModel);
    setVolunteer(volunteeringModel);
    setQualifications(qualificationsModel);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <PageTemplate loading={loading}>
      <PageTitle>Resume</PageTitle>
      <Reveal>
        <PagePoint title={'Technical Skills'}>
          <Reveal>
            <Accordion>
              {Object.keys(technical).map((key: string, index: number) => {
                return (
                  <Accordion.Item eventKey={index.toString()}>
                    <Reveal>
                      <Accordion.Header>{key}</Accordion.Header>
                      <Accordion.Body>
                        <div className={s['group']}>
                          {technical[key].map((skill: TechnicalSkill) => {
                            return (
                              <Reveal>
                                <SkillCard
                                  language={skill.language}
                                  level={skill.proficiency}
                                  name={skill.name}
                                  skills={skill.skills.map(
                                    (desc: TechnicalSkillDescription) => {
                                      return desc.description;
                                    }
                                  )}
                                />
                              </Reveal>
                            );
                          })}
                        </div>
                      </Accordion.Body>
                    </Reveal>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Reveal>
        </PagePoint>
      </Reveal>
      <div style={{ marginBottom: '1.5rem' }} />
      <Reveal>
        <PagePoint title={'Experience'}>
          {experiences.map((experience: Experience) => {
            return (
              <Reveal>
                <Point
                  title={experience.title}
                  descriptionOne={experience.company}
                  note={`${experience.from} - ${experience.to}`}
                >
                  {experience.descriptions.map(
                    (desc: ExperienceDescription) => {
                      return (
                        <Reveal>
                          <Subpoint>
                            <span>{desc.description}</span>
                          </Subpoint>
                        </Reveal>
                      );
                    }
                  )}
                </Point>
              </Reveal>
            );
          })}
        </PagePoint>
      </Reveal>
      <Reveal>
        <PagePoint title={'Education'}>
          {educations.map((education: Education) => {
            return (
              <Reveal>
                <Point
                  title={education.school}
                  descriptionOne={education.major}
                  note={`${education.from} - ${education.to}`}
                >
                  {education.descriptions.map((desc: EducationDescription) => {
                    return (
                      <Reveal>
                        <Subpoint>
                          <span>{desc.description}</span>
                        </Subpoint>
                      </Reveal>
                    );
                  })}
                  {education.average === null ? null : (
                    <Reveal>
                      <Subpoint>
                        <span>{`GPA of ${education.average.toString}`}</span>
                      </Subpoint>
                    </Reveal>
                  )}
                </Point>
              </Reveal>
            );
          })}
        </PagePoint>
      </Reveal>
      <Reveal>
        <PagePoint title={'Volunteering'}>
          {volunteer.map((act: Volunteering) => {
            return (
              <Reveal>
                <Point
                  title={act.title}
                  descriptionOne={act.organization}
                  note={`${act.from} - ${act.to}`}
                >
                  {act.descriptions.map((desc: VolunteeringDescription) => {
                    return (
                      <Reveal>
                        <Subpoint>
                          <span>{desc.description}</span>
                        </Subpoint>
                      </Reveal>
                    );
                  })}
                </Point>
              </Reveal>
            );
          })}
        </PagePoint>
      </Reveal>
      <Reveal>
        <PagePoint title={'Qualifications'}>
          {qualifications.map((qual: Qualification) => {
            return (
              <Reveal>
                <Point
                  title={qual.name}
                  descriptionOne={qual.issuer}
                  note={qual.score?.toFixed(1).toString()}
                >
                  {qual.descriptions.map((desc: QualificationDescription) => {
                    return (
                      <Reveal>
                        <Subpoint>
                          <span>{desc.description}</span>
                        </Subpoint>
                      </Reveal>
                    );
                  })}
                </Point>
              </Reveal>
            );
          })}
        </PagePoint>
      </Reveal>
    </PageTemplate>
  );
}
