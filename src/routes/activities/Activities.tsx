import { useEffect } from 'react';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';

export default function Activities() {
  useEffect(() => {
    document.title = 'Activities';
  });
  return (
    <PageTemplate>
      <PageTitle>Activities</PageTitle>
      <PagePoint title='Competitions'>
        <Point
          title={'Runner-up of Bach Khoa Innovation 2021'}
          note={'Jan 2022'}
          descriptionOne={'Ho Chi Minh University of Technology'}
          descriptionTwo={
            'Bach Khoa Innovation is a competition in which contestants build innovative technological products and deliver startup ideas. My team and I built Uniify, a platform for high school students and parents to discover information on universities across Vietnam.'
          }
          links={[
            {
              link: 'https://oisp.hcmut.edu.vn/bk-innovation/2022/03/05/du-an-uniify-university-ify-nhom-5nn/',
              name: 'Details',
            },
          ]}
        >
          <Subpoint>
            {
              'Uniify is the highest position achieved by a software project in the competition history (runner-up/second place)'
            }
          </Subpoint>
        </Point>
        <Point
          title={'Contestant for Google Solution Challenge 2022'}
          note={'May 2022'}
          descriptionOne={'Google Student Developers'}
          descriptionTwo={
            "Google Solution Challenge aims to solve United Nation's global risks to humanity through technologies and brillant applications. My team and I built Foodmate, a social media for foodies, with daily challenges based around minimizing waste and healty eating."
          }
          links={[
            {
              link: 'https://developers.google.com/community/gdsc-solution-challenge',
              name: 'Details',
            },
          ]}
        ></Point>
      </PagePoint>
      <PagePoint title='Social Activities'>
        <Point
          title={'Resource/Mentor'}
          note={'Jun 2019'}
          descriptionOne={'SuperTeens Bootcamp by Babylons JSC Vietnam'}
          descriptionTwo={
            'SuperTeens Bootcamp is the leading summer camp in Asia with the aim of providing teenagers necessary skills for future success.'
          }
          links={[
            {
              link: 'https://babylons.com.vn/ernest-wong/superteens-bootcamp/',
              name: 'Details',
            },
          ]}
        >
          <Subpoint>
            <span>Support participants in activities</span>
          </Subpoint>
          <Subpoint>
            <span>Organize activities and perform logistical tasks</span>
          </Subpoint>
        </Point>
        <Point
          title={'Media Personnels & Marketer'}
          note={'Oct 2021 - now'}
          descriptionOne={'100 ngày bay by OISP Volunteer Club'}
          descriptionTwo={
            "'100 ngày bay' is charity concert organized to be organized by OISP Volunteer Club in 2022"
          }
          links={[
            {
              link: 'https://www.facebook.com/100-Ng%C3%A0y-Bay-104601925678557',
              name: 'Facebook',
            },
          ]}
        >
          <Subpoint>
            <span>Prepare social media posts and marketing materials</span>
          </Subpoint>
        </Point>
      </PagePoint>
      <PagePoint title='Talks'>
        <Point
          title={'Speaker'}
          note={'Jul 2022'}
          descriptionOne={'CeaSy Project'}
          descriptionTwo={
            'CeaSy is a student community project for students with interest in computer science and IT'
          }
          links={[
            {
              link: 'https://www.facebook.com/ceasyproject/posts/pfbid018QzXbHdkKEUgiMqPpUbFVwGWHFPKmmERpGNHph8AhUVNtghypbeXaYDr1EKp9jxl',
              name: 'Facebook',
            },
          ]}
        >
          <Subpoint>
            <span>
              {'Talk: '}
              <i>"Introduction to Web, Mobile and Game Development"</i>
            </span>
          </Subpoint>
        </Point>
        <Point
          title={'Speaker/Mentor'}
          note={'Dec 2020 - Mar 2022'}
          descriptionOne={'Unboxing Day & Maska by High School Help Kit'}
          descriptionTwo={
            'High School Help Kit project aims to help thousands of secondary school students in the high school national examination'
          }
          links={[
            {
              link: 'https://www.facebook.com/HighSchoolHelpKit',
              name: 'Facebook',
            },
          ]}
        >
          <Subpoint>
            <span>Prepare academic articles and study materials</span>
          </Subpoint>
          <Subpoint>
            <span>Perform talks and presentations in the events</span>
          </Subpoint>
        </Point>
      </PagePoint>
    </PageTemplate>
  );
}
