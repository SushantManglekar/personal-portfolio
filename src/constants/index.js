import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  meta,
  shopify,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  python,
  sklearn,
  tensorflow,
  numpy,
  pandas,
  matplotlib,
  seaborn,
  django,
  flask,
  sql,
  postgresql,
  mysql,
  aws,
  azure,
  fastapi,
  mrs,
  chatApp,
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
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "MLOps/DevOps",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "AWS",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },

  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "mysql",
    icon: mysql,
  },

  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Python Developer - Intern",
    company_name: "Anveshak Technology and Knowledge solutions",
    icon: "https://d1hbpr09pwz0sk.cloudfront.net/logo_url/anveshak-technology-and-knowledge-solutions-3540f4be",
    iconBg: "#E6DEDD",
    date: "July 2022 - Dec 2023",
    points: [
      "Built scalable web applications with Django, ensuring performance and reliability.",
      "Optimized PostgreSQL and MySQL schemas, improving query efficiency.",
      "Streamlined deployments with Django ORM migrations.",
      "Developed RESTful APIs for seamless front-end and back-end communication.",
      "Enhanced security with robust authentication and authorization.",
      "Collaborated with teams to deliver high-quality solutions, meeting client needs.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Mavenberg Innovations",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIrfuV2HUftfaJs3YrV-as3z77jQ6LgOH2w&s",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Automated ETL processes, reducing migration time by 30%.",
      "Achieved 95% data accuracy using SQL and AI-driven validation.",
      "Deployed scalable solutions on AWS with Docker, cutting costs by 20%.",
      "Enhanced model retraining efficiency by 50% with SageMaker.",
      "Built secure, high-performance APIs using Flask and Django.",
      "Optimized e-commerce backend, boosting load times and user experience.",
      "Collaborated with teams to accelerate project timelines by 20%.",
      "Delivered zero-defect solutions with 100% client satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Price Prediction App",
    description:
      "Developed a full-stack prediction system using Python, Flask, React, and PostgreSQL, with a strong focus on Exploratory Data Analysis (EDA) and feature engineering. Implemented DVC for model versioning and MLflow for experiment tracking, ensuring reproducibility and performance monitoring. Deployed the solution on AWS, integrating CI/CD pipelines for automated model updates, version control, and cloud scalability.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "Sklearn",
        color: "white-text-gradient",
      },
      {
        name: "MLFlow",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "CI/CD",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/SushantManglekar/car-price-prediction-system.git",
  },
  {
    name: "Hybrid Recommender System",
    description:
      "Developed a Hybrid Recommender System using the MovieLens dataset, integrating backend development with FastAPI for APIs and Docker for containerization Implemented CI/CD pipelines with GitHub Actions for automated testing and deployment. Utilized DVC for versioning datasets and S3 bucket for remote storage management. Applied MLFlow for experiment tracking, ensuring scalability, maintainability, and seamless deployment to AWS.",
    tags: [
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "MLFlow",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "CI/CD",
        color: "pink-text-gradient",
      },
    ],
    image: mrs,
    source_code_link:
      "https://github.com/SushantManglekar/hybrid-recommender-system.git",
  },
  {
    name: "Real time chat app",
    description:
      "Frontend (React): Interactive UI with WebSocket integration for real-time updates. Backend (Django Channels): Manages WebSocket connections, message routing, and user authentication.Database: Message storage using Django ORM, with Redis for WebSocket connection management. Features: Real-time messaging, typing indicators, and user presence tracking.",

    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "WebScokets",
        color: "pink-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link:
      "https://github.com/SushantManglekar/Real-time-chat-app-with-Django.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
