import { useEffect } from 'react';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';

export default function Certificates() {
  useEffect(() => {
    document.title = 'Certificates';
  });
  return (
    <PageTemplate>
      <PageTitle>Certificates</PageTitle>
      <PagePoint title='Back-end Development'>
        <Point
          title={'The Complete Web Development Bootcamp'}
          note={'Mar 2021'}
          descriptionOne={'Udemy'}
          descriptionTwo={'By Angela Yu and London App Brewery'}
          links={[
            {
              link: 'https://www.udemy.com/course/complete-web-development-course/',
              name: 'Udemy',
            },
          ]}
        >
          <Subpoint>
            <span>Modern HTML5 and CSS3</span>
          </Subpoint>
          <Subpoint>
            <span>{'Node.js for web development (JQuery, React,...)'}</span>
          </Subpoint>
        </Point>
        <Point
          title={'Spring, Spring Boot & Hibernate for beginners'}
          note={'Mar 2022'}
          descriptionOne={'Udemy'}
          descriptionTwo={'By Chad Darby'}
          links={[
            {
              link: 'https://www.udemy.com/course/spring-hibernate-tutorial/',
              name: 'Udemy',
            },
          ]}
        >
          <Subpoint>
            <span>Web apps with Spring MVC</span>
          </Subpoint>
          <Subpoint>
            <span>
              {
                'Spring Security, Spring REST and Spring Boot, JPA with Hibernate'
              }
            </span>
          </Subpoint>
          <Subpoint>
            <span>
              {'OOP, dependency injection, aspect-oriented programming,...'}
            </span>
          </Subpoint>
        </Point>
        <Point
          title={'ASP.NET Core Web API Fundamentals'}
          note={'Jun 2022'}
          descriptionOne={'Pluralsight'}
          descriptionTwo={'By Kevin Dockx'}
          links={[
            {
              link: 'https://www.pluralsight.com/courses/asp-dot-net-core-6-web-api-fundamentals',
              name: 'Pluralsight',
            },
          ]}
        >
          <Subpoint>
            <span>{'Service and Repository pattern'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Entity Framework with SQL databases'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'REST API fundamentals'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Writing unit & integration tests'}</span>
          </Subpoint>
        </Point>
        <Point
          title={"NestJS: The Complete Developer's Guide"}
          note={'Jun 2022'}
          descriptionOne={'Udemy'}
          descriptionTwo={'By Stephen Grinder'}
          links={[
            {
              link: 'https://www.udemy.com/course/nestjs-the-complete-developers-guide/',
              name: 'Udemy',
            },
          ]}
        >
          <Subpoint>
            <span>{'Pipes'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'TypeORM with PostgreSQL'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Authentication & Authorization'}</span>
          </Subpoint>
        </Point>
      </PagePoint>
      <PagePoint title='Front-end Development'>
        <Point
          title={'React - The Complete Guide'}
          note={'Dec 2021'}
          descriptionOne={'Udemy'}
          descriptionTwo={'By Maximilian Schwarzmüller'}
          links={[
            {
              link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
              name: 'Udemy',
            },
          ]}
        >
          <Subpoint>
            <span>{'React component fundamentals'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'State management with Redux, Redux Toolkit'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'HTTP with Fetch API and axios'}</span>
          </Subpoint>
        </Point>
      </PagePoint>
      <PagePoint title='Mobile Development'>
        <Point
          title={'Flutter & Dart - The Complete Guide'}
          note={'Nov 2021'}
          descriptionOne={'Udemy'}
          descriptionTwo={'By Maximilian Schwarzmüller'}
          links={[
            {
              link: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/',
              name: 'Udemy',
            },
          ]}
        >
          <Subpoint>
            <span>{'Dart programming language'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Flutter widgets, layouts, styling'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Asynchronous programming'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'State management with stateful widgets'}</span>
          </Subpoint>
        </Point>
        <Point
          title={'Mobile Development with Flutter & Dart'}
          note={'Jan 2021'}
          descriptionOne={'Udemy'}
          descriptionTwo={'By Angela Yu'}
          links={[
            {
              link: 'https://www.udemy.com/course/flutter-bootcamp-with-dart/',
              name: 'Udemy',
            },
          ]}
        >
          <Subpoint>
            <span>{'State management with Flutter BLoC'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Real-time Firebase Firestore integration'}</span>
          </Subpoint>
        </Point>
        <Point
          title={'The Complete Android 12 & Kotlin Development Masterclass'}
          note={'Feb 2022'}
          descriptionOne={'Udemy'}
          descriptionTwo={'By Denis Panjuta'}
          links={[
            {
              link: 'https://www.udemy.com/course/android-kotlin-developer/',
              name: 'Udemy',
            },
          ]}
        >
          <Subpoint>
            <span>{'Kotlin fundamentals'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'MVC and MVVM architecture'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Firebase integration'}</span>
          </Subpoint>
        </Point>
      </PagePoint>
      <PagePoint title='Languages'>
        <Point
          title={'Java Complete Masterclass'}
          note={'Dec 2021'}
          descriptionOne={'Udemy'}
          descriptionTwo={'By Tim Buchalka'}
          links={[
            {
              link: 'https://www.udemy.com/course/java-the-complete-java-developer-course/',
              name: 'Udemy',
            },
          ]}
        >
          <Subpoint>
            <span>{'Control flows, loops,...'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Java Collections, Generics, java.util'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Concurrency'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Unit testing'}</span>
          </Subpoint>
        </Point>
        <Point
          title={'C# Development Fundamentals'}
          note={'Jun 2022'}
          descriptionOne={'Pluralsight'}
          descriptionTwo={'Learning path with multiple courses'}
          links={[
            {
              link: 'https://www.pluralsight.com/paths/csharp',
              name: 'Pluralsight',
            },
          ]}
        >
          <Subpoint>
            <span>{'Control flows, loops,...'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Null safety in C#'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'OOP, interfaces, generics, records'}</span>
          </Subpoint>
        </Point>
      </PagePoint>
      <PagePoint title='Others'>
        <Point
          title={'Docker & Kubernetes: The Practical Guide'}
          note={'Dec 2021'}
          descriptionOne={'Udemy'}
          descriptionTwo={'By Tim Buchalka'}
          links={[
            {
              link: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
              name: 'Udemy',
            },
          ]}
        >
          <Subpoint>
            <span>{'Container networking'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Introduction to Kubernetes'}</span>
          </Subpoint>
          <Subpoint>
            <span>{'Deploy multi-container applications'}</span>
          </Subpoint>
        </Point>
      </PagePoint>
    </PageTemplate>
  );
}
