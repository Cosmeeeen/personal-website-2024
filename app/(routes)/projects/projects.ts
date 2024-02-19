import { StaticImageData } from 'next/image';

import gptTypingGame1 from '@/app/_assets/images/gpt-typing-game/1.webp';
import gptTypingGame2 from '@/app/_assets/images/gpt-typing-game/2.webp';

import { GitHub, Link } from 'react-feather';
import type { Icon } from 'react-feather';

interface Link {
  href: string;
  icon: Icon;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  otherComments: string;
  images: StaticImageData[];
  links?: Link[];
};

const PROJECTS:Project[] = [
  {
    title: 'GPT Typing Game',
    description: 'This is a typing game powered by GPT-3.5-turbo. The game will generate a prompt based on a topic given by the user (or a default topic if none is given). The user will then have to type out the prompt as fast as possible. The game will keep track of the user&apos;s time and typing speed, while adding the ammount of typed words to the user&apos;s total score. The user can then compete with other users worldwide in the leaderboard, either for the highest WPM or the highest total score. As the app is being regularly used by me, features are being added and bugs are being fixed constantly.',
    technologies: ['Next.js (pages router)', 'tRPC', 'Prisma', 'Tailwind', 'NextAuth'],
    otherComments: 'Project is deployed to Vercel, uses loglib for analytics, PlanetScale for the database, and (of course) gpt-3.5-turbo for prompt generation',
    images: [gptTypingGame1, gptTypingGame2],
    links: [
      {
        href: 'https://gpt-typing-game.vercel.app/',
        icon: Link,
      },
      {
        href: 'https://github.com/Cosmeeeen/gpt-typing-game',
        icon: GitHub,
      },
    ],
  },
];

export { PROJECTS };
