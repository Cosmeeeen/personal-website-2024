interface WorkExperience {
  title: string;
  description: string;
  date: string;
  technologies: string[];
}

const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: 'Frontend Engineer - 8x8 inc.',
    date: '2021 - present',
    description:
      'I have been working at 8x8 inc. since 2021, where I started off as an intern and later got promoted to a full-time position. I have been working on the 8x8 Work Desktop and Web applications, where I have been responsible for implementing new features, fixing bugs, and improving the overall user experience, as part of a team of experienced engineers.',
    technologies: [
      'React',
      'Redux',
      'TypeScript',
      'Jest',
      'styled-components',
      'and more',
    ],
  },
  {
    title: "Volunteer Programming Teacher - Dalia's Book",
    date: '2021',
    description:
      'One of my goals in life is showing people the wonderful things you can achieve with programming. I was very excited to have the opportunity to teach programming to children remotely, in order to introduce them to the world of programming and technology. I have taught children aged 8-12 how to create their own games and animations using Scratch, while working with experienced teachers. This project taught me a lot about patience, communication, and how to explain complex concepts in a simple and understandable way, as well as collaboration with other teachers.',
    technologies: ['Scratch', 'Google Suite (Meet, Docs, Sheets, etc...)'],
  },
  {
    title: 'Design Team Volunteer - ExplorIT Bacău',
    date: '2019',
    description:
      'My first volunteering experience in the field of programming and technology was with ExplorIT, a programming contest organised in Bacău, Romania. I was part of the design team, where I was responsible for creating the visual identity of the contest, as well as the promotional materials, as well as creating the website.',
    technologies: ['Angular', 'Photoshop', 'Premiere Pro'],
  },
  {
    title: '(Erasmus+) Frontend Developer - DroidHouse',
    date: '2018',
    description:
      'While I was always passionate about programming, my first professional experience as well as my introduction to the world of web development was during an Erasmus+ project in Valencia, Spain, where I was responsible for creating a website for the project, as well as working on the existing website of the local business that was hosting us. This was a great experience, as I was able to receive feedback from professionals, as well as learn from them.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery'],
  },
];

export { WORK_EXPERIENCE };
