import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import Reveal from '../../components/animate/Reveal';
import Link from '../../components/link/Link';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';

import s from './Projects.module.scss';

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects';
  });
  return (
    <PageTemplate>
      <PageTitle>Projects</PageTitle>
      <PagePoint title='Professional'>
        <Point
          title={'Maybank Investment'}
          note={'Developer'}
          descriptionOne={'Maybank in cooperation with Savvycom JSC'}
          descriptionTwo={
            'MBI is the brand new mobile application for investors with built in AI functionalities, powered by Flutter'
          }
        ></Point>
        <Point
          title={'PTE Magic Mobile'}
          note={'Developer'}
          descriptionOne={'PTE Magic in cooperation with BENIT'}
          descriptionTwo={
            'PTE Magic Mobile helps PTE learners revise and improve their English-speaking ability. Built with Flutter'
          }
        ></Point>
      </PagePoint>
      <PagePoint title='Personal'>
        <Point
          title={'Uniify'}
          note={'Developer'}
          descriptionOne={'5NN for Bach Khoa Innovation'}
          descriptionTwo={
            'Uniify is the ultimate platform for universities and institutions across Vietnam'
          }
        >
          <Subpoint>
            <span>{'Web application: Built with React'} </span>
          </Subpoint>
          <Subpoint>
            <span>
              {'Mobile application: Built with Flutter, for mobile phone usage'}
            </span>
          </Subpoint>
          <Subpoint>
            <span>
              {
                'Back-end: Built with Spring Boot (Java), for usage with Uniify web and mobile version'
              }
            </span>
          </Subpoint>
        </Point>
        <Point
          title={'Foodmate'}
          note={'Developer'}
          descriptionOne={'For Google Solution Challenge'}
          descriptionTwo={
            'Foodmate is a social media platform for food lovers, healthy eaters and environmentalists'
          }
        >
          <Subpoint>Built with Flutter and Firebase</Subpoint>
        </Point>
        <Point
          title={'Personal Portfolio'}
          note={'Developer'}
          descriptionOne={'This portfolio'}
          descriptionTwo={
            'This project is for showcasing and expressing my capabilities, skills and competencies towards recruiters and partners'
          }
        >
          <Subpoint>Web application: Built with React</Subpoint>
          <Subpoint>
            Back-end: Built with ASP.NET Core Web API, deployed through a Docker
            containers, on a personal server running Ubuntu 20.04
          </Subpoint>
        </Point>
      </PagePoint>
      <Reveal>
        <Alert variant='info'>
          Smaller projects are available through my GitHub and GitLab
          repositories, please check it out in the link below!
        </Alert>
      </Reveal>
      <div className={s['links']}>
        <Link
          link={{
            link: 'https://github.com/ttn-nguyen42',
            name: 'GitHub',
          }}
        />
        <Link
          link={{
            link: 'https://gitlab.com/ttn.nguyen42',
            name: 'GitLab',
          }}
        />
      </div>
    </PageTemplate>
  );
}
