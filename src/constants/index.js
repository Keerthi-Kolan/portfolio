import AI_CHATBOT from "../assets/projects/AI_CHATBOT.png";
import todoApp from "../assets/projects/TodoApp.png";
import MealMaestro from "../assets/projects/Meal_Maestro.png";
import MusicByMood from "../assets/projects/Music_by_Mood.png";
import MaliciousURLDetection from "../assets/projects/MaliciousURLDetection.png";
import Blog from "../assets/projects/Blog.png";
import portfolio from "../assets/projects/portfolio.png";
import e_commerce from "../assets/projects/e_commerce.jpeg";
import Transcriber from "../assets/projects/Transcriber.png";
export const HERO_CONTENT = `I\’m a curious and driven Full-Stack Developer with a passion for building software that solves real problems. With a strong foundation in computer science and hands-on experience across the stack, I enjoy diving into complex challenges whether it's designing scalable backend systems, crafting responsive user interfaces, or deploying secure cloud applications. I thrive in fast-paced, collaborative environments where I can keep learning, contribute meaningfully, and turn ideas into impactful solutions.

`;

export const ABOUT_TEXT = `Full-Stack Developer with a strong foundation in system design, scalable microservices, and cloud-native architecture

\nExperienced in building end-to-end web applications using React, Node.js, Spring Boot, and Django

\nProficient in frontend development with React, JavaScript, and TypeScript, focused on responsive and user-centric design

\nSkilled in backend engineering using Java, Python, and Express.js, with experience designing RESTful APIs and integrating complex services

\nHands-on experience with AWS (Lambda, S3, Cognito, DynamoDB), Docker, and CI/CD pipelines for cloud deployment and automation

\nBuilt a high-uptime licensing microservice at Chronodat LLC, processing over 10,000 validations daily and supporting 50+ enterprise clients

\nDeveloped full-stack projects including an AI chatbot (MERN + OpenAI), a serverless transcription platform, and a scalable e-commerce site

\nStrong grasp of database design and optimization, with experience in MongoDB, PostgreSQL, and MySQL

\nPassionate about writing clean, maintainable code and solving real-world problems across the stack

\nSeeking full-time opportunities as a Full-Stack Developer to contribute to impactful products and grow within a collaborative engineering team

`;

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "Machine Learning Research Intern",
    company: "RooGenAI",
    description: ``,
    technologies: ["Python, Miniconda, Neural Networks"],
  },
  {
    year: "May 2022 - August 2022",
    role: "Application Developer Intern",
    company: "Chronodat",
    description: `Contributed to the development of an enterprise-grade Human Resource Management platform serving over 50 clients.\n
Designed and implemented RESTful APIs using Java Spring, built responsive and modular user interfaces with React and JavaScript, and participated in backend optimization and cloud infrastructure efforts.\n
Engineered a licensing microservice that maintained 100 percent uptime while processing more than 10,000 validations daily, supporting enterprise compliance at scale.\n
Implemented CI/CD pipelines using GitHub Actions and Terraform, reducing deployment time and improving operational efficiency.\n
Gained hands-on experience in full-stack development, cloud-native architecture, and building scalable, secure, and maintainable systems.
`,
    technologies: ["JavaScript", "Java Spring Framework", "AWS"],
  },
];

export const PROJECTS = [
  {
    title: "Audio & Video Transcriber",
    image: Transcriber,
    description:
      "Built a serverless transcription platform that processed over 200 audio and video files using AWS Transcribe for speech-to-text conversion. Implemented secure file uploads to Amazon S3 via AWS Amplify Storage, ensuring complete data isolation and preventing cross-user access. The backend was powered by AWS Lambda and API Gateway, resulting in over 40% cost savings and uptime exceeding 99%. Transcription for 1-minute clips completed in under 12 seconds, offering fast and efficient turnaround. The React-based frontend included live upload progress, media playback, and cleanly formatted transcript rendering for enhanced user experience",
    technologies: [
      "React",
      "JavaScript",
      "AWS Transcribe",
      "AWS Lambda",
      "API Gateway",
      "Amazon S3",
      "Amplify",
      "AWS IAM",
      "HTML",
      "CSS",
    ],
    link: "https://github.com/Keerthi-Kolan/Transcriber",
  },
  {
    title: "Malicious URL Detector",
    image: MaliciousURLDetection,
    description:
      "Built a URL classification system using a dataset of 651,191 URLs categorized into Benign, Phishing, Malware, and Defacement. Engineered 12 lexical and metadata-based features, including URL length, entropy, symbol frequency, and a novel WHOIS-based domain expiration metric to evaluate domain legitimacy. Implemented a Random Forest classifier from scratch in Python and designed a real-time feature extraction pipeline suitable for browser and email security applications. Achieved 88.21% accuracy with precision and recall above 83%",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "WHOIS",
      "Jupyter Notebook",
    ],
    link: "https://github.com/Keerthi-Kolan/Malicious-URL-Detection",
  },
  {
    title: "AI CHATBOT (Chat-GPT Clone)",
    image: AI_CHATBOT,
    description:
      "Developed a scalable AI chatbot using the MERN stack and TypeScript, supporting 10,000+ users with 99.9% uptime and 90%+ response accuracy. Integrated ChatGPT API, implemented chat history persistence, and ensured secure access with advanced authentication for an optimized, personalized user experience",
    technologies: ["MonogDB", "Express", "React", "Node.js", "TypeScript"],
    link: "https://github.com/Keerthi-Kolan/AI-CHATBOT",
  },
  {
    title: "Blog Website",
    image: Blog,
    description:
      "Built a dynamic blog app with React and React Router, enabling full CRUD functionality for 100+ posts. Implemented seamless page-less navigation, improving user experience.Utilized real-time state management for smooth post creation, editing, and deletion, reducing UI lag by 30\\%. Added unique post identifiers, ensuring 100% accuracy in viewing, updating, and deleting posts",
    technologies: ["HTML", "CSS", "React"],
    link: "https://github.com/Keerthi-Kolan/Blog",
  },
  {
    title: "Emotion Based Music Recommendation System",
    image: MusicByMood,
    description:
      "Built a Python web app with OpenCV to scan and crop facial images, processing 30-40 emotion predictions in 2-3 seconds. Utilized a machine learning model to identify emotions with 95% accuracy and developed an emotion-based YouTube song recommendation system that increased user engagement by 30%",
    technologies: ["Python", "OpenCV", "Scikit-learn", "TensorFlow", "Keras"],
    link: "https://github.com/Keerthi-Kolan/emotion_based_music_recommendation_system",
  },

  {
    title: "E-Commerce Plactform",
    image: e_commerce,
    description:
      "Built a Django eCommerce site with user/guest checkout and cookie-based cart persistence, boosting conversions by 20\\%. Integrated PayPal for secure international payments, supporting account and card transactions. Designed a scalable data model with 6 core entities for efficient order management. Developed 3 core templates (Store, Cart, Checkout) for seamless product browsing and checkout",
    technologies: ["Python", "Django"],
    link: "https://github.com/Keerthi-Kolan/ECommerce_Website",
  },
  {
    title: "Meal Maestro",
    image: MealMaestro,
    description:
      "Built a personalized meal planning platform with React and the Spoonacular API, serving 5,000+ active users. Key features include custom meal plans, meal regeneration, favorites, and detailed nutritional information for 200+ recipes, all with a dynamic, responsive user experience",
    technologies: ["React", "Spoonacular API"],
    link: "https://github.com/Keerthi-Kolan/Meal-Maestro",
  },
  {
    title: "Todo App",
    image: todoApp,
    description:
      "Built a React Todo app with functionality to add tasks, mark them as completed, and automatically move completed tasks to the bottom for better organization",
    technologies: ["HTML", "CSS", "React"],
    link: "https://todobykeerthikolan.netlify.app/",
  },
  {
    title: "Portfolio website",
    image: portfolio,
    description:
      "Built a personal portfolio website using React and Tailwind CSS. This is the website you're currently viewing, showcasing my skills, projects, and experience with a rich design",
    technologies: ["React", "Tailwind CSS"],
    link: "#",
  },
];

export const CONTACT = {
  email: "keerthi.kolan@gmail.com",
};
