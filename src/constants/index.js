import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  reactnative,
  githubicon,
  statusneo,
  bluestock,
  freelance,
  python,
  django,
  welcometrade,
  projectmanage,
  passvault,
  motisweets,
  abha,
  resort,
  gaurav,
  toyjoy
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "GitHub",
    icon: githubicon,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "StatusNeo",
    icon: statusneo,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "At StatusNeo, I work on large-scale, customer-facing applications for the IndiGo booking platform, contributing to features used by millions of users.",
      "Build and maintain scalable web and mobile interfaces using React.js and React Native.",
      "Collaborate with designers, product managers, and backend engineers to deliver smooth, user-centric experiences.",
      "Independently developed and shipped production features such as “Upgrade to Stretch” and the Stretch upgrade check-in pop-up, handling everything from implementation to release.",
      "Focus on performance, responsiveness, and cross-device compatibility to ensure a seamless booking journey.",
      "Actively participate in code reviews, resolve production issues, and maintain high code quality standards.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Delivered custom web solutions as a Freelance Frontend Developer for clients across various industries.",
      "Built modern, responsive, and visually polished interfaces using React.js and Tailwind CSS.",
      "Worked directly with clients to translate ideas into scalable, production-ready web applications.",
      "Prioritized performance, usability, and maintainable code to deliver high-quality user experiences.",
      "Handled projects end-to-end, from requirement gathering to deployment and post-delivery support.",
    ]
  },
  {
    title: "React.js Developer",
    company_name: "Bluestock Finetech",
    icon: bluestock,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Worked as a Frontend Intern at Bluestock Fintech, contributing to the development and enhancement of their official website.",
      "Built and refined user-facing components using React.js, ensuring a clean, modern, and intuitive UI.",
      "Collaborated with the design and product teams to translate business requirements into responsive web interfaces.",
      "Implemented responsive layouts and ensured cross-browser compatibility for a consistent user experience across devices.",
      "Focused on code quality, reusability, and performance while following best frontend development practices.",
    ]
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Saksham  proved me wrong.",
    name: "Mohit Sharma",
    designation: "Owner",
    company: "Welcome Trade",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Saksham does.",
    name: "Gaurav Bhatia",
    designation: "Owner",
    company: "Gaurav Motors",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Saksham optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mehak Sharma",
    designation: "Owner",
    company: "Moti Sweets",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Toy and Joy Playzone",
    description:
      "A vibrant and interactive website for Toy and Joy Playzone, a children's entertainment center. The website provides information about the playzone's attractions, events, and allows parents to book play sessions for their kids. Built using React.js for frontend and Django for backend services, for the client Toy and Joy Playzone.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      }
    ],
    image: toyjoy,
    source_code_link: "http://github.com/tascan25/FootPrint",
    web_link: "https://toyandjoyplayzoneplayschool.netlify.app/"
  },
  {
    name: "Welcome Trade",
    description:
      "A single go to platform for all your Services, weather it is domestic or international. Welcome Trade helps you find the best service providers around you. This website is built using React.js for frontend and Django for backend, for the client Welcome Trade.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      }
    ],
    image: welcometrade,
    source_code_link: "https://github.com/tascan25/client_welcome_trade",
    web_link: "https://welcometrade.netlify.app/"
  },
  {
    name: "Whispering Valley Resort",
    description:
      "A resort website that provides information about the resort, its amenities, and allows users to make reservations. Built using React.js for server-side rendering and Django for backend services, for the client Whispering Valley Resort.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },

    ],
    image: resort,
    source_code_link: "https://github.com/tascan25/client_whispering_valley_resort",
    web_link: "https://resortr.netlify.app/"
  },
  {
    name: "Moti Sweets",
    description:
      "A delightful dessert shop website that showcases a variety of sweets and treats. Built using React.js and Tailwind CSS for frontend and Django for backend services, for the client Moti Sweets.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: motisweets,
    source_code_link: "https://motisweets.com/",
  },
  {
    name: "Dr. Abha Bhatnagar",
    description:
      "A professional website for Dr. Abha Bhatnagar, a renowned medical practitioner. The website provides information about her services, expertise, and allows patients to book appointments. Built using React.js and Tailwind CSS for frontend.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: abha,
    source_code_link: "https://github.com/tascan25/ent-whisper-clinic",
    web_link: "https://drabhabhatnagar.com/",
  },
  {
    name: "Gaurav Motors",
    description:" A second hand car reseller website, which gives you varites of the option for buying the cars, Built using React.js and Tailwind CSS for frontend",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gaurav,
    source_code_link: "https://github.com/tascan25/client-gaurav_motors",
    web_link: "https://gauravmotors.in/",
  },
  {
    name: "PassVault",
    description:
      "A secure password manager application that helps users store and manage their passwords safely. Built using React.js and Tailwind CSS for frontend and Django for backend services.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
    ],
    image: passvault,
    source_code_link: "https://github.com/tascan25/PassVault",
    web_link: "https://passwrdvault.netlify.app/"
  },
  {
    name: "Project Management Tool",
    description:
      "A web-based project management tool that allows teams to collaborate, track tasks, and manage projects efficiently. Built using React.js and Tailwind CSS for frontend and Django for backend services.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
    ],
    image: projectmanage,
    source_code_link: "https://github.com/tascan25/Project-Management-App",
    web_link: "https://rprojectmanager.netlify.app/"
  },

];

export { services, technologies, experiences, testimonials, projects };
