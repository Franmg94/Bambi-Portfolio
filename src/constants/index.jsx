import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project-pictures/project1.jpg";
import image2 from "../assets/project-pictures/project2.jpg";
import image3 from "../assets/project-pictures/project3.jpg";
import image4 from "../assets/project-pictures/project4.jpg";
import image5 from "../assets/project-pictures/project5.jpg";
import image6 from "../assets/project-pictures/project6.png";
import image7 from "../assets/project-pictures/project7.jpg";
import image8 from "../assets/project-pictures/project8.jpg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Trajectory", href: "#trajectory" },
  { label: "Projects", href: "#projects" },
  // { label: "Skills", href: "#skills" },
  // { label: "Award", href: "#award" },
  // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Ceren Kalay",
  info: "Event and Operation Manager / Community Builder / Program Curator ",
};

export const TAGS = [
  "Event and Operation Manager",
  "Community Builder",
  "Program Curator",
];

export const ABOUT = {
  text1:
    "I create events, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Ceren Kallay, I'm an event producer and cultural curator based in Berlin, originally from Turkey. I graduated from the Department of European Union Studies at Istanbul Bilgi University and have over a decade of experience in the entertainment industry. I have  had the privilege of working as a coordinator and event manager for major events and film festivals, including the !f İstanbul Independent Film Festival and the Istanbul Film Festival.",
};

export const WORKEXPERIENCE = [
  {
    eventName: "MAGIC DYKE",
    date: "Apr 2023 - Present",
    jobTitle: "PRODUCER",
    description:
      "Magic Dyke* is a performing group in Berlin by and for lesbians, queer women, non-binary, trans, intersex, and agender people. Since May 2022, Magic Dyke* has been creang sensaonal shows and offering a party that is a safe space for the SLINTA* (sapphic, lesbian, intersex, non-binary, transgender, agender) community in Berlin.",
    videoLink: "https://www.youtube.com/watch?v=ngZf3x0pKos",
    webLink: "https://www.magicdyke.com/services",
  },
  {
    eventName: "EMERGENT SPACES",
    date: "Apr 2023 - Dec 2023",
    jobTitle: "CO-CURATOR & CO-ORGANIZER",
    description:
      "Emergent Spaces is a developing curatorial project that focuses on centralizing queer and trans* feminist perspectives in the diaspora. Our goal is to create spaces of hope that are responsive, radical, and intersectional. Responsibilities include leading curatorial projects that highlight queer and trans* feminist perspectives in the diaspora, developing and implementing activities that foster responsive, radical, and intersectional spaces, collaborating with artists and venues to raise funds for communities in need, and managing event budgets to ensure successful outcomes.",
  },

  {
    eventName: "TEMASET",
    date: "Mar 2021 - Sep 2021",
    jobTitle: "PROJECT MANAGER",
    description:
      "Temaset is a multisensory experience design studio that innovatively blends gastronomy into film experiences. As Project Manager, I led the Tasty Cinema project, collaborating with brands to create unique, tailored experiences for their products. I masterfully planned and managed all event details with precision, ensured seamless communication with local partners, sponsors, and brands, and operated events efficiently through online platforms.",
  },
  {
    eventName: "FOUNDATION FOR CULTURE AND ARTS, ISTANBUL",
    date: "Feb 2019 - Mar 2020",
    jobTitle: "HOSPITALITY MANAGER",
    description:
      "Managed hospitality operations for premier events, including Film, Jazz, and Theater Festivals. Coordinated comprehensive travel arrangements for international artists and guests. Developed and managed detailed itineraries to optimize artists' schedules. Oversaw budget planning and execution for all hospitality requirements. Led and coordinated the guide team and hospitality assistants to ensure seamless service. Key events include:\n- 39th Istanbul Film Festival (14-17 Apr 2020)\n- 38th Istanbul Film Festival (5-16 Apr 2019)\n- 26th Istanbul Jazz Festival (29 June - 18 July 2019)\n- 23rd Istanbul Theater Festival - Special Events\n- Sutra (Sadler's Wells) (17-18 September 2019)\n- Pss Pss (Compagnia Baccalà) (28 September - 1 October 2019)",
  },
  {
    eventName: "!F ISTANBUL INDEPENDENT FILM FESTIVAL",
    date: "Nov 2018 - Dec 2019",
    jobTitle: "NEW !f2 COORDINATOR (Project Manager)",
    description:
      "‘Spaces of Culture’ provides spaces and resources for the realization of cultural projects within the visual and performing arts, as well as for discussion, training, and development opportunities for local institutions, cultural professionals, and community members. Spaces of Culture conferences are held once a year, curated by the A Corner in the World team. A Corner in the World is a festival for performing arts that brings together artists from Turkey, the Middle East, Caucasus, and the Balkans who work in close geographical proximity but have few opportunities to share a stage, experience each other’s work, and develop a dialogue. Key events include:\n- Space of Culture Conference (17-18 December 2018 / Bomonada)\n- Space of Culture - Cultural Encounters (7-8 December 2019 / ARTER)\n\nResponsibilities:\n- Orchestrated panels, managed event budgets, and supervised production processes for annual 'Spaces of Culture' conferences.\n- Streamlined hospitality and logistics coordination for participants, ensuring seamless event operations.\n- Liaised with local partners to fulfill production requirements and enhance collaborative efforts.\n- Directed event execution and panel coordination during conferences, maintaining high standards of professionalism.\n- Led and managed a volunteer team of approximately 10 members, fostering a cohesive and efficient team environment.",
  },
  {
    eventName: "CAPPADOX FESTIVAL / POZITIF MUSIC",
    date: "May 2018 - Jun 2018",
    jobTitle: "HOSPITALITY ASSOCIATE (Logistics Coordinator)",
    description:
      "In the 4th year, Cappadox and its participants set out to explore the theme 'Silence', across a broad range of music, contemporary art, gastronomy, and outdoor programming at Cappadocia. Responsibilities included:\n- Coordinated all flights and ground transfers for over 100 team members at the Cappadox festival.\n- Managed and executed logistics for flights and ground transportation.\n- Supervised backstage preparations and ensured seamless execution.\n- Directed field operations, ensuring smooth festival activities.\n- Led a team of backstage assistants across 5 stages and 6 backstages.",
  },
  {
    eventName: "!F ISTANBUL INDEPENDENT FILM FESTIVAL",
    date: "Jan 2016 - Mar 2018",
    jobTitle: "!F2 LIVE & EVENTS COORDINATOR",
    description:
      "In the 16th, 17th, and 18th editions of !f Istanbul, I was responsible for all the festival events (VR exhibition, talks with directors) and !f2 screenings, a cross-cultural and cross-border cinema series screened in 50 locations at the same time. Responsibilities included:\n- Coordinated all festival events for the 16th, 17th, and 18th editions of !f Istanbul, including VR exhibitions and director talks.\n- Organized and managed cross-cultural cinema series, !f2 screenings, across 50 locations simultaneously.\n- Established and maintained relationships with over 200 contacts for both test and main screenings at 56 locations in 34 cities.\n- Supervised and coordinated the technical infrastructure for screenings.\n- Planned and managed event budgets and production processes.\n- Operated and managed !f Istanbul's social media accounts for events and !f2 Live.\n- Oversaw a volunteer team of 30 people, including the !f Tomorrow exhibition.\n- Managed live streaming and Q&A sessions post-screening for !f2 Live events.",
  },
  {
    eventName: "EXPO 2016 ANTALYA",
    date: "Apr 2016 - Sep 2016",
    jobTitle: "HOSPITALITY ASSISTANT",
    description:
      "As the hospitality assistant, I was assisting the hospitality department for logistics, transfers, and backstage operation during the events. I worked with more than 20 groups or artists such as Elton John & His Band, Deep Purple, Maroon 5, Enrique Iglesias, Demi Lovato, Ricky Martin, Afrojack & Apster, Simply Red, Lara Fabian, Tarkan, Stomp, One Republic, Emma Shapplin, Status Quo, Level 42, Blaze - The International Dance Spectrum, and Cirque Eloize. Responsibilities included:\n- Supported the hospitality department by efficiently managing logistics, transfers, and backstage operations for high-profile events.\n- Coordinated logistics for over 20 renowned artists and groups, including Elton John, Deep Purple, and Maroon 5.\n- Arranged seamless ground transfers for artists, ensuring punctual and smooth transportation.\n- Assisted in production processes, contributing to the successful execution of events.\n- Managed backstage operations and artists’ schedules, enabling hassle-free performances.",
  },
  {
    eventName: "CHARMENKO MUSIC ORGANIZATION",
    date: "Aug 2016 - Jan 2017",
    jobTitle: "DEPARTMENT & PERSONAL ASSISTANT",
    description:
      "Charmenko works as a mediator between the promoters and the artists; connects local and international festivals, companies, and municipalities with the artists and bands from all kinds of genres as a booking agency with its well-experienced talent buyers. As an assistant in various departments (Production, Agency, Booking, General Management), I was also the personal assistant to the general executive of Charmenko. Responsibilities included coordinating international meetings with precision, streamlining travel arrangements for colleagues and management, efficiently organizing and maintaining the company database (FileMaker), and managing the ticket counting process accurately.",
  },
];

export const PROJECTS = [
  {
    title: "E-commerce Platform",
    subtitle:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: image1,
  },
  {
    title: "Social Media App",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: image2,
  },
  {
    title: "Project Management Tool",
    subtitle: "A project management tool built with Django and PostgreSQL.",
    image: image3,
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
  },
  {
    title: "Weather Dashboard",
    subtitle:
      "A weather dashboard application built with Vue.js and Express.js.",
    image: image5,
  },
  {
    title: "Blog Platform",
    subtitle:
      "A blogging platform developed with Ruby on Rails and PostgreSQL.",
    image: image6,
  },
  {
    title: "Fitness Tracker",
    subtitle: "A fitness tracking app created using Flutter and Firebase.",
    image: image7,
  },
  {
    title: "Recipe Finder",
    subtitle: "A recipe finder application developed with Angular and Node.js.",
    image: image8,
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
