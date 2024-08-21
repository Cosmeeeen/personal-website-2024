import {
  Mail,
  GitHub,
  Instagram,
  Linkedin,
  Coffee,
  DollarSign,
  Twitch,
  Smile,
  Music,
} from 'react-feather';

type TSocialLink = {
  icon: JSX.Element;
  href: string;
  title: string;
  description?: string;
  showInHeader?: boolean; // Header should have max 4 icons in order to look good
};

const socialLinks: TSocialLink[] = [
  {
    icon: <GitHub />,
    href: 'https://github.com/Cosmeeeen/',
    title: 'GitHub',
    description:
      'Check out all my unfinished projects! (and some finished ones too)',
    showInHeader: true,
  },
  {
    icon: <Instagram />,
    href: 'https://www.instagram.com/cosmin_ilie8',
    title: 'Instagram',
    description: 'Here you can see all the bad photos I take',
    showInHeader: true,
  },
  {
    icon: <Linkedin />,
    href: 'https://www.linkedin.com/in/cosmin8/',
    title: 'LinkedIn',
    description:
      'I mostly use this as a resume, but you can connect with me here too!',
    showInHeader: true,
  },
  {
    icon: <Mail />,
    href: 'mailto:contact@cosmin.zip',
    title: 'Mail',
    description:
      'If you want to send me an email, you can do it here (contact@cosmin.zip)',
    showInHeader: true,
  },
  {
    icon: <Coffee />,
    href: 'https://www.buymeacoffee.com/cosmeen',
    title: 'Buy me a coffee',
    description:
      'If you like my work, you can support me by buying me a coffee',
  },
  {
    icon: <DollarSign />,
    href: 'https://www.paypal.com/paypalme/cosmeeen',
    title: 'PayPal',
    description:
      "If you like my work, but you don't like coffee, you can support me here too!",
  },
  {
    icon: <Twitch />,
    href: 'https://www.twitch.tv/cosmeen',
    title: 'Twitch',
    description:
      'I try to convince myself to stream. In case I ever succeed, you can follow me here!',
  },
  {
    icon: <Smile />,
    href: 'https://discord.com/users/218821684562493440',
    title: 'Discord',
    description:
      "I don't know how to use this, but I'll try to answer if you send me a message here!",
  },
  {
    icon: <Music />,
    href: 'https://tidal.com/browse/user/197342436',
    title: 'Tidal',
    description:
      'This is where I currently listen to music (I change this every 3 months)',
  },
];

export { socialLinks };
export type { TSocialLink };
