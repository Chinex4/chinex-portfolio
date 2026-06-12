import {
  AndroidStudioIcon,
  CssIcon,
  ExpoIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  GithubIcon,
  GraphqlIcon,
  HtmlIcon,
  JavascriptIcon,
  LinkedinIcon,
  NextJSIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  ThreeJSIcon,
  TwitterXIcon,
  TypescriptIcon,
  VscodeIcon,
} from "@/assets/icons";


export const SOCIAL_LINKS = [
  {
    link: "https://github.com/chinex4",
    icon: GithubIcon,
  },
  {
    link: "https://www.linkedin.com/in/chinaza-okuefuna",
    icon: LinkedinIcon,
  },
  {
    link: "https://twitter.com/chinexdev",
    icon: TwitterXIcon,
  },
];

export const TECH_STACKS_TOOLS = [
  {
    title: "Technologies",
    collections: [
      { icon: JavascriptIcon, name: "Javascript" },
      { icon: TypescriptIcon, name: "Php" },
      { icon: TypescriptIcon, name: "Laravel" },
      { icon: JavascriptIcon, name: "Node.js" },
      { icon: ReactIcon, name: "React.js" },
      { icon: ReduxIcon, name: "Redux" },
      { icon: NextJSIcon, name: "Next.js" },
      { icon: ExpoIcon, name: "React Native (Expo)" },
      { icon: SassIcon, name: "SASS" },
      { icon: TailwindIcon, name: "Tailwind CSS" },
      { icon: ThreeJSIcon, name: "Three.js" },
      { icon: GraphqlIcon, name: "GraphQL" },
      { icon: GitIcon, name: "Git" },
      { icon: FirebaseIcon, name: "Firebase" },
      { icon: HtmlIcon, name: "HTML" },
      { icon: CssIcon, name: "CSS" },
    ],
  },
  {
    title: "Tools",
    collections: [
      { icon: VscodeIcon, name: "VSCode" },
      { icon: FigmaIcon, name: "Figma" },
      { icon: AndroidStudioIcon, name: "Android Studio" },
      { icon: AndroidStudioIcon, name: "PhotoShop" },
    ],
  },
];
export const PROJECTS = [
  {
    name: "Xilolo Live streaming Platform",
    image: "/images/xilolo.png", // import your image
    desc: "A live streaming platform built with React.js and Tailwind CSS, featuring real-time video streaming, user interactions, and a sleek interface.",
    date: "2026",
    stacks: ["React.js", "Tailwind CSS", "Redux", "Material UI", "JavaScript", "REST API"],
    live: "https://xilolo.com",
    code: "https://github.com/zagasm/xilolo-web",
  },
  {
    name: "Bizinote Inventory Management System",
    image: "/images/bizinote.png", // import your image
    desc: "An inventory management system built with React.js and Tailwind CSS, featuring real-time inventory tracking, user management, and a sleek interface.",
    date: "2026",
    stacks: ["React.js", "Tailwind CSS", "Redux", "Material UI", "JavaScript", "REST API"],
    live: "https://bizinote.com",
    code: "https://github.com/bizinote/bizinote-frontend-react",
  },
  {
    name: "Ourtalento",
    image: "/images/ourtalento.png",
    desc: "A personal growth and skill-building community platform designed to help young people gain clarity, learn valuable skills, build income systems, and stay accountable through structured learning, mentorship, and community support.",
    date: "2026",
    stacks: ["React.js", "Tailwind CSS", "JavaScript", "REST API"],
    live: "https://ourtalento.com",
    code: "https://github.com/chinex4/talento",
  },
  {
    name: "Zagasm Memes Social Media Platform",
    image: "/images/zagasm.png", // import your image
    desc: "A social media platform built with React.js and Tailwind CSS, featuring user profiles, post creation, commenting, liking, and real-time updates.",
    date: "2026",
    stacks: ["React.js", "Tailwind CSS", "Redux", "Material UI", "JavaScript", "REST API"],
    live: "https://zagasm.com",
    code: "#",
  },
  {
    name: "Grovine Landing Page",
    image: "/images/grovine.png", // import your image
    desc: "A landing page built with React.js and Tailwind CSS, featuring a modern design, responsive layout, and smooth animations to showcase the Grovine app.",
    date: "2026",
    stacks: ["React.js", "Tailwind CSS", "Redux", "Material UI", "Framer Motion", "Typescript"],
    live: "https://grovine.ng",
    code: "https://github.com/Chinex4/grovine-web",
  },
  {
    name: "Spitchlabs AI-Powered Speech Analytics Platform",
    image: "/images/spitch.png", // import your image
    desc: "An AI-powered speech analytics platform built with Next.js and Tailwind CSS, featuring real-time transcription, sentiment analysis, and detailed reporting.",
    date: "2025",
    stacks: ["Next.js", "Tailwind CSS", "Typescript", "REST API"],
    live: "https://spitchlabs.com",
    code: "#",
  },
  {
    name: "Foodhut Landing Page",
    image: "/images/foodhut-web.png", // import your image
    desc: "Food ordering and delivery platform built with React.js and Tailwind CSS, featuring restaurant discovery, cart, checkout, order tracking, push notifications, and in-app payments.",
    date: "2025",
    stacks: ["React.js", "Tailwind CSS", "JavaScript", "REST API"],
    live: "https://foodhut.co",
    code: "#",
  },
  {
    name: "Precious Evans Brand Strategy Website",
    image: "/images/pe.png", // import your image
    desc: "A corporate website for a brand strategy company built with React.js and Tailwind CSS, featuring a clean design, responsive layout, and smooth animations to showcase the company's services and portfolio.",
    date: "2025",
    stacks: ["React.js", "Tailwind CSS", "Redux", "Material UI", "Framer Motion", "Typescript"],
    live: "https://preciousevans.com",
    code: "https://github.com/chinex4/pe",
  },
  {
    name: "Riyallure",
    image: "/images/riyallure.png", // import your image
    desc: "A Perfume E-commerce platform built with Laravel, focused on delivering a smooth online shopping experience.",
    date: "2025",
    stacks: ["Laravel", "PHP", "MySQL", "REST API"],
    live: "https://riyallure.com.ng",
    code: "#",
  },
  {
    name: "JL3 Services Limited",
    image: "/images/jl3.png", // import your image
    desc: "Corporate website for a procurement, marine, and logistics company.",
    date: "2025",
    stacks: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Laravel"],
    live: "https://jl3services.com",
    code: "#",
  },
  {
    name: "Autolin Motors",
    image: "/images/autolin.png", // import your image
    desc: "Automobile e-commerce platform for buying and selling cars, built with React.js and Tailwind CSS for a seamless user experience.",
    date: "2025",
    stacks: ["React.js", "Tailwind CSS", "JavaScript"],
    live: "https://autolinmotors.com.ng",
    code: "https://github.com/chinex4/autolin-motors",
  },
];

export const Mobile_APP = [
  {
    name: "Grovine Mobile App",
    image: "/images/grovine.png", // import your image
    desc: "Grocery delivery mobile app built with React Native, featuring user-friendly interfaces, real-time order tracking, and seamless integration with backend services for a smooth shopping experience. Recipes, meal planning, and personalized recommendations to enhance the user experience.",
    date: "2025",
    stacks: ["React Native", "JavaScript", "REST API", "Mobile UI"],
    live: "https://drive.google.com/file/d/170qnmG571k2O2n2r-A-LNs4gLUDDUhS6/view?usp=sharing",
    android:
      "https://play.google.com/store/apps/details?id=com.bizinote.app&pcampaignid=web_share",
    code: "https://github.com/chinex4/grovine-app",
  },
  {
    name: "Bizinote Mobile App",
    image: "/images/bizinote.webp", // import your image
    desc: "Cross-platform inventory management app that helps businesses manage products, stock movements, categories, and reports.",
    date: "2025",
    stacks: ["React Native", "JavaScript", "REST API", "Mobile UI"],
    live: "https://apps.apple.com/ng/app/bizinote/id6757477200",
    android:
      "https://play.google.com/store/apps/details?id=com.bizinote.app&pcampaignid=web_share",
    code: "https://github.com/chinex4/bizinote-app",
  },
  {
    name: "Hexavia Mobile App",
    image: "/images/hexavia.png", // import your image
    desc: "Cross-platform business management mobile application built for iOS and Android with optimized API integration and strong app performance.",
    date: "2025",
    stacks: ["React Native", "JavaScript", "REST API", "Mobile Architecture"],
    live: "https://apps.apple.com/ng/app/hexavia-business-management/id6755739856",
    android:
      "https://play.google.com/store/apps/details?id=com.chinexx.hexavia&pcampaignid=web_share",
    code: "https://github.com/chinex4/hexavia-app",
  },
  {
    name: "Foodhut Mobile App",
    image: "/images/foodhut.webp", // import your image
    desc: "Food ordering and delivery mobile app with restaurant discovery, cart, checkout, order tracking, push notifications, and in-app payments.",
    date: "2025",
    stacks: [
      "React Native",
      "JavaScript",
      "REST API",
      "Push Notifications",
      "Payments",
    ],
    live: "https://play.google.com/store/apps/details?id=com.mobile.foodhut&pcampaignid=web_share",
    code: "https://github.com/chinex4/foodhut",
  },
];
