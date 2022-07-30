import { useEffect, useState } from 'react';
import Reveal from '../../components/animate/Reveal';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';
import Certificate, { CertificateDescription } from '../../models/Certificate';

const certificates: Certificate[] = [
  {
    name: 'The Complete Web Development Bootcamp',
    time: 'Mar 2021',
    issuer: 'Udemy',
    instructor: 'By Angela Yu and London App Brewery',
    descriptions: [
      { description: 'Modern HTML5 and CSS3' },
      { description: 'Node.js for web development (JQuery, React,...)' },
    ],
    links: [
      {
        link: 'https://www.udemy.com/course/complete-web-development-course/',
        name: 'Udemy',
      },
    ],
    type: {
      name: 'Back-end Development',
    },
  },
  {
    name: 'Spring, Spring Boot & Hibernate for beginners',
    time: 'Mar 2022',
    issuer: 'Udemy',
    instructor: 'By Chad Darby',
    descriptions: [
      { description: 'Web apps with Spring MVC' },
      {
        description:
          'Spring Security, Spring REST and Spring Boot, JPA with Hibernate',
      },
      {
        description:
          'OOP, dependency injection, aspect-oriented programming,...',
      },
    ],
    links: [
      {
        link: 'https://www.udemy.com/course/spring-hibernate-tutorial/',
        name: 'Udemy',
      },
    ],
    type: {
      name: 'Back-end Development',
    },
  },
  {
    name: 'ASP.NET Core Web API Fundamentals',
    time: 'Jun 2022',
    issuer: 'Pluralsight',
    instructor: 'By Kevin Dockx',
    descriptions: [
      { description: 'Service and Repository pattern' },
      {
        description: 'Entity Framework with SQL databases',
      },
      {
        description: 'REST API fundamentals',
      },
      { description: 'Writing unit & integration tests' },
    ],
    links: [
      {
        link: 'https://www.pluralsight.com/courses/asp-dot-net-core-6-web-api-fundamentals',
        name: 'Pluralsight',
      },
    ],
    type: {
      name: 'Back-end Development',
    },
  },
  {
    name: "NestJS: The Complete Developer's Guide",
    time: 'Jun 2022',
    issuer: 'Udemy',
    instructor: 'By Stephen Grinder',
    descriptions: [
      { description: 'Pipes' },
      {
        description: 'TypeORM with PostgreSQL',
      },
      {
        description: 'Authentication & Authorization',
      },
      { description: 'Writing unit & integration tests' },
    ],
    links: [
      {
        link: 'https://www.udemy.com/course/nestjs-the-complete-developers-guide/',
        name: 'Udemy',
      },
    ],
    type: {
      name: 'Back-end Development',
    },
  },
  {
    name: 'React - The Complete Guide',
    time: 'Dec 2021',
    issuer: 'Udemy',
    instructor: 'By Maximilian Schwarzmüller',
    descriptions: [
      { description: 'React component fundamentals' },
      {
        description: 'State management with Redux, Redux Toolkit',
      },
      {
        description: 'HTTP with Fetch API and axios',
      },
      { description: 'Writing unit & integration tests' },
    ],
    links: [
      {
        link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
        name: 'Udemy',
      },
    ],
    type: {
      name: 'Front-end Development',
    },
  },
  {
    name: 'Flutter & Dart - The Complete Guide',
    time: 'Nov 2021',
    issuer: 'Udemy',
    instructor: 'By Maximilian Schwarzmüller',
    descriptions: [
      { description: 'Dart programming language' },
      {
        description: 'Flutter widgets, layouts, styling',
      },
      {
        description: 'Asynchronous programming',
      },
      { description: 'State management with stateful widgets' },
    ],
    links: [
      {
        link: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/',
        name: 'Udemy',
      },
    ],
    type: {
      name: 'Mobile Development',
    },
  },
  {
    name: 'Mobile Development with Flutter & Dart',
    time: 'Jan 2021',
    issuer: 'Udemy',
    instructor: 'By Angela Yu and London App Brewery',
    descriptions: [
      { description: 'State management with Flutter BLoC' },
      {
        description: 'Real-time Firebase Firestore integration',
      },
    ],
    links: [
      {
        link: 'https://www.udemy.com/course/flutter-bootcamp-with-dart/',
        name: 'Udemy',
      },
    ],
    type: {
      name: 'Mobile Development',
    },
  },
  {
    name: 'The Complete Android 12 & Kotlin Development Masterclass',
    time: 'Feb 2022',
    issuer: 'Udemy',
    instructor: 'By Denis Panjuta',
    descriptions: [
      { description: 'Kotlin fundamentals' },
      {
        description: 'MVC and MVVM architecture',
      },
      {
        description: 'Firebase integration',
      },
    ],
    links: [
      {
        link: 'https://www.udemy.com/course/android-kotlin-developer/',
        name: 'Udemy',
      },
    ],
    type: {
      name: 'Mobile Development',
    },
  },
  {
    name: 'Java Complete Masterclass',
    time: 'Dec 2021',
    issuer: 'Udemy',
    instructor: 'By Tim Buchalka',
    descriptions: [
      { description: 'Control flows, loops,...' },
      {
        description: 'Java Collections, Generics, java.util',
      },
      {
        description: 'Concurrency',
      },
      {
        description: 'Unit testing',
      },
    ],
    links: [
      {
        link: 'https://www.udemy.com/course/java-the-complete-java-developer-course/',
        name: 'Udemy',
      },
    ],
    type: {
      name: 'Languages',
    },
  },
  {
    name: 'C# Development Fundamentals',
    time: 'Jun 2022',
    issuer: 'Pluralsight',
    instructor: 'Learning path with multiple courses',
    descriptions: [
      { description: 'Control flows, loops,...' },
      {
        description: 'Null safety in C#',
      },
      {
        description: 'OOP, interfaces, generics, records',
      },
    ],
    links: [
      {
        link: 'https://www.pluralsight.com/paths/csharp',
        name: 'Pluralsight',
      },
    ],
    type: {
      name: 'Languages',
    },
  },
  {
    name: 'Docker & Kubernetes: The Practical Guide',
    time: 'Dec 2021',
    issuer: 'Udemy',
    instructor: 'By Tim Buchalka',
    descriptions: [
      { description: 'Container networking' },
      {
        description: 'Introduction to Kubernetes',
      },
      {
        description: 'Deploy multi-container applications',
      },
    ],
    links: [
      {
        link: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
        name: 'Udemy',
      },
    ],
    type: {
      name: 'Others',
    },
  },
];

export default function Certificates() {
  const [info, setInfo] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Certificates';
    setLoading(true);
    // Fetch from API
    let classify: any = {};
    certificates.forEach((cert: Certificate) => {
      if (classify[cert.type.name] === undefined) {
        classify[cert.type.name] = [cert];
      } else {
        classify[cert.type.name] = [...classify[cert.type.name], cert];
      }
    });
    setInfo(classify);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <PageTemplate loading={loading}>
      <PageTitle>Certificates</PageTitle>
      {Object.keys(info).map((key: string) => {
        return (
          <Reveal>
            <PagePoint title={key}>
              {info[key].map((cert: Certificate) => {
                return (
                  <Reveal>
                    <Point
                      title={cert.name}
                      note={cert.time}
                      descriptionOne={cert.issuer}
                      descriptionTwo={cert.instructor}
                      links={cert.links}
                    >
                      {cert.descriptions.map((desc: CertificateDescription) => {
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
    </PageTemplate>
  );
}
