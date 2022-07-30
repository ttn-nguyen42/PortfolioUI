import { useEffect, useState } from 'react';
import Reveal from '../../components/animate/Reveal';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';
import Activity, { ActivityDescription } from '../../models/Activity';

export default function Activities() {
  const [categories, setCategories] = useState<any>({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Activities';
    setLoading(true);
    // Parsing data from API
    let byCategories: any = {};
    activities.forEach((activity: Activity) => {
      if (byCategories[activity.type.name] !== undefined) {
        byCategories[activity.type.name] = [
          ...byCategories[activity.type.name],
          activity,
        ];
      } else {
        byCategories[activity.type.name] = [activity];
      }
    });
    console.log(byCategories);
    setCategories(byCategories);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <PageTemplate loading={loading}>
      <PageTitle>Activities</PageTitle>
      {Object.keys(categories).map((key: string) => {
        console.log(key);
        return (
          <Reveal>
            <PagePoint title={key}>
              {categories[key].map((activity: Activity) => {
                return (
                  <Reveal>
                    <Point
                      title={activity.name}
                      note={activity.time}
                      descriptionTwo={activity.overview}
                      descriptionOne={activity.organizer}
                      links={activity.links}
                    >
                      {activity.descriptions.map(
                        (desc: ActivityDescription) => {
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
        );
      })}
    </PageTemplate>
  );
}

const activities: Activity[] = [
  {
    name: 'Runner-up of Bach Khoa Innovation 2021',
    time: 'Jan 2022',
    organizer: 'Ho Chi Minh University of Technology',
    overview:
      'Bach Khoa Innovation is a competition in which contestants build innovative technological products and deliver startup ideas. My team and I built Uniify, a platform for high school students and parents to discover information on universities across Vietnam.',
    descriptions: [
      {
        description:
          'Uniify is the highest position achieved by a software project in the competition history (runner-up/second place)',
      },
    ],
    links: [
      {
        link: 'https://oisp.hcmut.edu.vn/bk-innovation/2022/03/05/du-an-uniify-university-ify-nhom-5nn/',
        name: 'Details',
      },
    ],
    type: {
      name: 'Competitions',
    },
  },
  {
    name: 'Contestant for Google Solution Challenge 2022',
    time: 'May 2022',
    organizer: 'Google Student Developers',
    overview:
      "Google Solution Challenge aims to solve United Nation's global risks to humanity through technologies and brillant applications. My team and I built Foodmate, a social media for foodies, with daily challenges based around minimizing waste and healty eating.",
    descriptions: [],
    links: [
      {
        link: 'https://developers.google.com/community/gdsc-solution-challenge',
        name: 'Details',
      },
    ],
    type: {
      name: 'Competitions',
    },
  },
  {
    name: 'Resource/Mentor',
    time: 'Jun 2019',
    organizer: 'SuperTeens Bootcamp by Babylons JSC Vietnam',
    overview:
      'SuperTeens Bootcamp is the leading summer camp in Asia with the aim of providing teenagers necessary skills for future success',
    descriptions: [
      {
        description: 'Support participants in activities',
      },
      {
        description: 'Organize activities and perform logistical tasks',
      },
    ],
    links: [
      {
        link: 'https://babylons.com.vn/ernest-wong/superteens-bootcamp/',
        name: 'Details',
      },
    ],
    type: {
      name: 'Social Activities',
    },
  },
  {
    name: 'Media Personnels & Marketer',
    time: 'Oct 2021 - now',
    organizer: '100 ngày bay by OISP Volunteer Club',
    overview:
      "'100 ngày bay' is charity concert organized to be organized by OISP Volunteer Club in 2022",
    descriptions: [
      {
        description: 'Prepare social media posts and marketing materials',
      },
    ],
    links: [
      {
        link: 'https://www.facebook.com/100-Ng%C3%A0y-Bay-104601925678557',
        name: 'Facebook',
      },
    ],
    type: {
      name: 'Social Activities',
    },
  },
  {
    name: 'Speaker',
    time: 'Jul 2022',
    organizer: 'CeaSy Project',
    overview:
      'CeaSy is a student community project for students with interest in computer science and IT',
    descriptions: [
      {
        description:
          'Talks: "Introduction to Web, Mobile and Game Development"',
      },
    ],
    links: [
      {
        link: 'https://www.facebook.com/ceasyproject/posts/pfbid018QzXbHdkKEUgiMqPpUbFVwGWHFPKmmERpGNHph8AhUVNtghypbeXaYDr1EKp9jxl',
        name: 'Facebook',
      },
    ],
    type: {
      name: 'Talks',
    },
  },
  {
    name: 'Speaker/Mentor',
    time: 'Dec 2020 - Mar 2022',
    organizer: 'Unboxing Day & Maska by High School Help Kit',
    overview:
      'High School Help Kit project aims to help thousands of secondary school students in the high school national examination',
    descriptions: [
      {
        description: 'Prepare academic articles and study materials',
      },
      {
        description: 'Perform talks and presentations in the events',
      },
    ],
    links: [
      {
        link: 'https://www.facebook.com/HighSchoolHelpKit',
        name: 'Facebook',
      },
    ],
    type: {
      name: 'Talks',
    },
  },
];
