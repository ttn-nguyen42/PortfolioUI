import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Reveal from '../../components/animate/Reveal';
import Link from '../../components/link/Link';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point, { ILinkPair } from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';
import { IProject, IProjectDescription } from '../../models/Project';
import { getInfoData, getProjectData } from '../../network/HttpRepository';

import s from './Projects.module.scss';

export default function Projects() {
  const [info, setInfo] = useState<any>({});
  const [links, setLinks] = useState<ILinkPair[]>([]);
  const [profile, setProfile] = useState<any>({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Projects';
    setLoading(true);
    const effect = async () => {
      let projects = await getProjectData();
      setProfile(await getInfoData());
      setLinks(projects.repositories);
      let classify: any = {};
      projects.projects.forEach((project: IProject) => {
        if (classify[project.type.name] === undefined) {
          classify[project.type.name] = [project];
        } else {
          classify[project.type.name] = [
            ...classify[project.type.name],
            project,
          ];
        }
      });
      setInfo(classify);
      setLoading(false);
    };
    effect();
  }, []);

  return (
    <PageTemplate info={profile} loading={loading}>
      <PageTitle>Projects</PageTitle>
      {Object.keys(info).map((key: string) => {
        return (
          <Reveal>
            <PagePoint title={key}>
              {info[key].map((project: IProject) => {
                return (
                  <Reveal>
                    <Point
                      title={project.name}
                      note={project.role}
                      descriptionOne={project.team}
                      descriptionTwo={project.overview}
                      links={project.links}
                    >
                      {project.descriptions.map((desc: IProjectDescription) => {
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
        {links.map((link: ILinkPair) => {
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
