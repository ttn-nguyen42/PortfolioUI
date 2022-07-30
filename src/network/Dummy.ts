import { ILinkPair } from '../components/points/Point';
import IAbout from '../models/AboutMe';
import { IActivity } from '../models/Activity';
import { ICertificate } from '../models/Certificate';
import IInfo from '../models/Info';
import { IProject } from '../models/Project';
import {
  IEducation,
  IExperience,
  IQualification,
  ITechnicalSkill,
  IVolunteering,
} from '../models/Resume';

export const technicalSkillsModel: ITechnicalSkill[] = [
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

export const experiencesModel: IExperience[] = [
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

export const educationsModel: IEducation[] = [
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

export const volunteeringModel: IVolunteering[] = [
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

export const qualificationsModel: IQualification[] = [
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

export const aboutModel: IAbout = {
  biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec sem
        libero. Quisque mattis ipsum id consequat hendrerit. Proin eget erat nec
        dolor blandit laoreet in in ex. Etiam vitae dapibus erat, in elementum
        ipsum. Fusce efficitur, velit eget auctor gravida, nulla velit rhoncus
        est, id rutrum lorem erat pulvinar magna. Aenean eget erat turpis.
        Aliquam mollis sit amet urna non pulvinar. In sodales dictum nisl, id
        tincidunt sapien pharetra commodo. Aliquam erat volutpat. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Vestibulum tellus arcu, dictum in varius vitae, aliquam ut
        dolor. Maecenas aliquam pharetra massa. Proin id sapien nisi. Cras
        blandit urna vitae dolor iaculis euismod sed eu enim.`,
};

export const activitiesModel: IActivity[] = [
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

export const certificatesModel: ICertificate[] = [
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

export const projectsModel: IProject[] = [
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

export const repositoryLinksModel: ILinkPair[] = [
  {
    link: 'https://github.com/ttn-nguyen42',
    name: 'GitHub',
  },
  {
    link: 'https://gitlab.com/ttn.nguyen42',
    name: 'GitLab',
  },
];

export const infoModel: IInfo = {
  name: 'Nguyen Tran',
  shortBiography: `3rd year Computer Engineering student. Interested in back-end and
              mobile development.`,
  location: 'Ho Chi Minh City, Vietnam',
  email: 'ttn.nguyen42@gmail.com',
  links: [
    {
      name: 'LinkedIn',
      link: '',
    },
    {
      name: 'GitHub',
      link: '',
    },
    {
      name: 'GitLab',
      link: '',
    },
    {
      name: 'Spiderum',
      link: '',
    },
  ],
};
