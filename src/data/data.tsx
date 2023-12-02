import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Mayas website",
  description: "Maya's website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Yining Yuan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        
UMICH CSE '23 | MDP Intern @ ProQuest,
Currently looking for summer internship!
      </p>
    </>
  ),
  actions: [
    {
      href: 'assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a rising Senior at the University of Michigan in Computer Science, 
  graduating in December 2023. Specializing in machine learning, 
  backend software development, and data analysis, I am planning to continue my education in gradschool and I'm currently 
  seeking a spring/summer internship opportunity. `,
  aboutItems: [
    {label: 'Location', text: 'Ann Arbor, MI', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Piano, guitar, singing', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Michigan, Ann Arbor', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'part time instructional assistant @ UMich', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Javascript',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'RESTful API',
        level: 8,
      },
      {
        name: 'mySQL',
        level: 7,
      },
      {
        name: 'flask',
        level: 7,
      },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'Scikit learn',
        level: 8,
      },
      {
        name: 'numpy',
        level: 8,
      },
      {
        name: 'Pytorch',
        level: 7,
      },
      {
        name: 'XG Boost',
        level: 7,
      },
      {
        name: 'Amazon Sagemaker',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'C++',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C',
        level: 6,
      },
      {
        name: 'Java',
        level: 5,
      },
    ],
  },
  {
    name: 'Project management',
    skills: [
      {
        name: 'git version control',
        level: 8,
      },
      {
        name: 'software development cycle',
        level: 7,
      },
      {
        name: 'software development principles',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Dec 2023',
    location: 'University of Michigan, Ann Arbor',
    title: 'Bachelor of Computer Science Engineering',
    content: <p>Complete my degree with GPA over 3.8, University honor for multiple semester. Taken courses
     related to data structure and algorithms, computer vision, machine learning, database management systems, 
     web system, and human centered software engineering.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2020 - Present',
    location: 'Proquet & University of Michigan',
    title: 'Multidisciplinary Design Project Intern',
    content: (
        <>
        <p>
          Worked on an end-to-end collaborative machine learning project that predicted the success of newly emerging topics 
          for after a decade, using the ProQuest dissertation database and Web of Science database data. Developed a 
          model incorporating a feature extraction system, feature engineering system, truth label engineering system,
          and a model training and prediction system. Currently able to predict with a precision at the top 200 for an around 50% accuracy.
        </p>
        <br></br>
        <p>
          Utilized Python as our development programming language. Managed the database using dask and pandas dataframe. 
          In this project, I worked extensively with machine learning packages such as seaborn, scikit-learn, PyTorch, and matplotlib,
          as well as data preprocessing packages like numpy and math. Gained valuable experience working with AWS virtual machines,
          managing teamwork effectively, and handling large-scale datasets. This project not only enhanced my technical skills in machine
          learning and data processing but also developed my abilities in collaborative teamwork and big data management.
        </p>
      </>
    ),
  },
  {
    date: 'Aug 2023 - Dec 2023',
    location: 'Unviersity of Michigan',
    title: 'Instructional Assistant for Applied Machine Learning',
    content: (
      <p>
        Conducted weekly instructor team meetings, managed and edited class materials, created homework and midterm questions, graded assignments, and provided student support during office hours.
      </p>
    ),
  },
  {
    date: 'Aug 2022 - Dec 2022',
    location: 'Unviersity of Michigan',
    title: 'Instructional Assistant for Computational Linear Algebra',
    content: (
      <p>
        Led a beginner programming study group once a week, met with my team once a week and designed a study group agenda.
Reviewed and helped the professor with editing the ROB101 textbook during summer using latex, wrote the section that explained and compared Julia(the programming language used in class) to C++.
Hosted office hours and lab sessions once a week, and graded student’s homework coding assignment.
Meet and communicate with instructors once a week, discussing about teaching strategy and students performance in class.
    </p>
    ),
  },
  {
    date: 'Jan 2022 - July 2022',
    location: 'Unviersity of Michigan',
    title: 'Western Forest and Fire Initiative Research Assistant',
    content: (
      <p>
        A research project aimed to analyze the relationship between stakeholders in western forest
         wildfire management using data from https://inciweb.nwcg.gov/ website. Implemented an automated 
         web scraping program that collected various types of fire incident data from over 2000 web pages
          using the bs web-scraper, developed a database of actors involved in wildfire management using
           pandas dataframe. Preprocessed data using NLP model, extracting named-entities from overview 
           section, providing critical data for future analysis.</p>
    ),
  },
  {
    date: 'Aug 2021 - Dec 2021',
    location: 'Unviersity of Michigan',
    title: 'Analyzing the National Covid Data Cohort Research Assistant',
    content: (
      <p>
        Trained three machine learning models on data from the National COVID Cohort Collaborative, 
        predicted COVID severity in pediatric patients with an impressive 82% AUROC. Acquire hands-on 
        experience with essential Python libraries such as sklearn, pandas, and numpy. Project help with exploring
        and experimenting machine learning applications within a critical healthcare context in a newly developed data corhort.</p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:mayaaa@umich.edu',
    },
    {
      type: ContactType.Location,
      text: 'Ann Arbor, Michigan',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/Mayaaa311',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Mayaaa311'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yining-yuan-7065aa224/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
