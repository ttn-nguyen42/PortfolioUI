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
  IEducation,
  IEducationDescription,
  IExperience,
  IExperienceDescription,
  IQualification,
  IQualificationDescription,
  ITechnicalSkill,
  ITechnicalSkillDescription,
  IVolunteering,
  IVolunteeringDescription,
} from '../../models/Resume';
import { getInfoData, getResumeData } from '../../network/HttpRepository';

import s from './Resume.module.scss';

export default function Resume() {
  const [technical, setTechnical] = useState<any>({});
  const [experiences, setExperience] = useState<IExperience[]>([]);
  const [educations, setEducation] = useState<IEducation[]>([]);
  const [volunteer, setVolunteer] = useState<IVolunteering[]>([]);
  const [qualifications, setQualifications] = useState<IQualification[]>([]);

  const [profile, setProfile] = useState<any>({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const effect = async () => {
      document.title = 'Resume';
      setLoading(true);
      let resumeData = await getResumeData();
      setProfile(await getInfoData());
      let classifyTechnical: any = {};
      resumeData.skills.forEach((skill: ITechnicalSkill) => {
        if (classifyTechnical[skill.type.name] === undefined) {
          classifyTechnical[skill.type.name] = [skill];
        } else {
          classifyTechnical[skill.type.name] = [
            ...classifyTechnical[skill.type.name],
            skill,
          ];
        }
      });
      setExperience(resumeData.experience);
      setTechnical(classifyTechnical);
      setEducation(resumeData.education);
      setVolunteer(resumeData.volunteering);
      setQualifications(resumeData.qualification);
      setLoading(false);
    };
    effect();
  }, []);

  return (
    <PageTemplate info={profile} loading={loading}>
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
                          {technical[key].map((skill: ITechnicalSkill) => {
                            return (
                              <Reveal>
                                <SkillCard
                                  language={skill.language}
                                  level={skill.proficiency}
                                  name={skill.name}
                                  skills={skill.skills.map(
                                    (desc: ITechnicalSkillDescription) => {
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
          {experiences.map((experience: IExperience) => {
            return (
              <Reveal>
                <Point
                  title={experience.title}
                  descriptionOne={experience.company}
                  note={`${experience.from} - ${experience.to}`}
                >
                  {experience.descriptions.map(
                    (desc: IExperienceDescription) => {
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
          {educations.map((education: IEducation) => {
            return (
              <Reveal>
                <Point
                  title={education.school}
                  descriptionOne={education.major}
                  note={`${education.from} - ${education.to}`}
                >
                  {education.descriptions.map((desc: IEducationDescription) => {
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
          {volunteer.map((act: IVolunteering) => {
            return (
              <Reveal>
                <Point
                  title={act.title}
                  descriptionOne={act.organization}
                  note={`${act.from} - ${act.to}`}
                >
                  {act.descriptions.map((desc: IVolunteeringDescription) => {
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
          {qualifications.map((qual: IQualification) => {
            return (
              <Reveal>
                <Point
                  title={qual.name}
                  descriptionOne={qual.issuer}
                  note={qual.score?.toFixed(1).toString()}
                >
                  {qual.descriptions.map((desc: IQualificationDescription) => {
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
