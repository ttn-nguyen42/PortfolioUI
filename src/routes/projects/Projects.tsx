import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Reveal from '../../components/animate/Reveal';
import Link from '../../components/link/Link';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point, { LinkPair } from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';
import Project, { ProjectDescription } from '../../models/Project';

import s from './Projects.module.scss';

const projects: Project[] = [
  {
    name: 'Maybank Investment',
    role: 'Developer',
    team: 'Maybank in cooperation with Savvycom JSC',
    overview:
      'MBI is the brand new mobile application for investors with built in AI functionalities, powered by Flutter',
    descriptions: [],
    links: [],
    type: {
      name: 'Professional',
    },
  },
  {
    name: 'PTE Magic Mobile',
    role: 'Developer',
    team: 'PTE Magic in cooperation with BENIT',
    overview:
      'PTE Magic Mobile helps PTE learners revise and improve their English-speaking ability. Built with Flutter',
    descriptions: [],
    links: [],
    type: {
      name: 'Professional',
    },
  },
  {
    name: 'Uniify',
    role: 'Developer',
    team: '5NN for Bach Khoa Innovation',
    overview:
      'Uniify is the ultimate platform for universities and institutions across Vietnam',
    descriptions: [
      {
        description: 'Web application: Built with React',
      },
      {
        description:
          'Mobile application: Built with Flutter, for mobile phone usage',
      },
      {
        description:
          'Back-end: Built with Spring Boot (Java), for usage with Uniify web and mobile version',
      },
    ],
    links: [],
    type: {
      name: 'Personal',
    },
  },
  {
    name: 'Foodmate',
    role: 'Developer',
    team: 'For Google Solution Challenge',
    overview:
      'Foodmate is a social media platform for food lovers, healthy eaters and environmentalists',
    descriptions: [
      {
        description: 'Built with Flutter and Firebase',
      },
    ],
    links: [],
    type: {
      name: 'Personal',
    },
  },
  {
    name: 'Personal Portfolio',
    role: 'Developer',
    team: 'This portfolio',
    overview:
      'This project is for showcasing and expressing my capabilities, skills and competencies towards recruiters and partners',
    descriptions: [
      {
        description: 'Web application: Built with React',
      },
      {
        description: `Back-end: Built with ASP.NET Core Web API, deployed through a Docker
            containers, on a personal server running Ubuntu 20.04`,
      },
    ],
    links: [],
    type: {
      name: 'Personal',
    },
  },
];

const repositoryLinks: LinkPair[] = [
  {
    link: 'https://github.com/ttn-nguyen42',
    name: 'GitHub',
  },
  {
    link: 'https://gitlab.com/ttn.nguyen42',
    name: 'GitLab',
  },
];

export default function Projects() {
  const [info, setInfo] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Projects';
    setLoading(true);
    // Fetch from API
    let classify: any = {};
    projects.forEach((project: Project) => {
      if (classify[project.type.name] === undefined) {
        classify[project.type.name] = [project];
      } else {
        classify[project.type.name] = [...classify[project.type.name], project];
      }
    });
    setInfo(classify);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <PageTemplate loading={loading}>
      <PageTitle>Projects</PageTitle>
      {Object.keys(info).map((key: string) => {
        return (
          <Reveal>
            <PagePoint title={key}>
              {info[key].map((project: Project) => {
                return (
                  <Reveal>
                    <Point
                      title={project.name}
                      note={project.role}
                      descriptionOne={project.team}
                      descriptionTwo={project.overview}
                      links={project.links}
                    >
                      {project.descriptions.map((desc: ProjectDescription) => {
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
        );
      })}
      <Reveal>
        <Alert variant='info'>
          Smaller projects are available through my GitHub and GitLab
          repositories, please check it out in the link below!
        </Alert>
      </Reveal>
      <div className={s['links']}>
        {repositoryLinks.map((link: LinkPair) => {
          return (
            <Reveal>
              <Link link={link} />
            </Reveal>
          );
        })}
      </div>
    </PageTemplate>
  );
}
