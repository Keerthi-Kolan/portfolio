import AI_CHATBOT from "../assets/projects/AI_CHATBOT.png";
import todoApp from "../assets/projects/TodoApp.png";
import MealMaestro from "../assets/projects/Meal_Maestro.png";
import MusicByMood from "../assets/projects/Music_by_Mood.png";
import Blog from "../assets/projects/Blog.png";
import portfolio from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `Dynamic Computer Science graduate with a 4.0 GPA and hands-on expertise in building scalable, user-centric software. Skilled in Java, Python, and cutting-edge tech like AWS, React, and TensorFlow. Creator of innovative projects like an AI-powered chatbot and emotion-based music recommendation systems, boosting engagement and efficiency. Actively seeking opportunities to deliver impactful software solutions.`;

export const ABOUT_TEXT = `I am a Computer Science graduate student at California State University, East Bay, proudly maintaining a perfect 4.0 GPA, with an unwavering passion for innovative software development. My academic journey, enriched with hands-on experience, has meticulously honed my skills in backend development, machine learning, cloud computing, and user-centric interface design.

During my tenure as an Application Developer Intern at Chronodat, I not only developed but also implemented core RESTful APIs, dynamic user interfaces, and a client licensing microservice. This invaluable experience deepened my understanding of scalable architecture and agile methodologies, solidifying my foundation in the tech industry.

Beyond internships, I have spearheaded impactful projects such as creating an AI chatbot that supports over 10,000 users with remarkable accuracy and uptime. Additionally, I built an emotion-based music recommendation system leveraging machine learning, which boosted user engagement by a remarkable 30%. My full-stack expertise is further exemplified through projects like a personalized meal-planning website and an eCommerce platform optimized for international transactions.

Proficient in a diverse array of tools and technologies—from Java Spring, Django, and React to AWS and Azure cloud platforms—I thrive in fast-paced environments where my technical acumen can solve complex problems and craft meaningful software solutions. My journey is driven by an insatiable desire to continuously learn and grow.

I am actively seeking full-time opportunities to bring my skills and passion to innovative development teams. I am eager to make a tangible impact by contributing to groundbreaking projects and driving technological advancement.`;

export const EXPERIENCES = [
  {
    year: "May 2022 - August 2022",
    role: "Application Developer Intern",
    company: "Chronodat",
    description: `Contributed to the development of Chronodat’s Human Resource Management solution by planning and scoping the project to meet established deadlines. Designed and implemented the User Interface using JavaScript and assessed various database and cloud options to create a design tailored to specific use cases. Took sole responsibility for creating RESTful APIs to support key application features, including the applicant tracking system and time-off reporting system, utilizing the Java Spring framework. Developed the Chronodat client licensing microservice to manage license validation and ensure compliance with validity standards.`,
    technologies: ["JavaScript", "Java Spring Framework", "AWS"],
  },
];

export const PROJECTS = [
  {
    title: "AI CHATBOT (Chat-GPT Clone)",
    image: AI_CHATBOT,
    description:
      "Developed a scalable AI chatbot using the MERN stack and TypeScript, supporting 10,000+ users with 99.9% uptime and 90%+ response accuracy. Integrated ChatGPT API, implemented chat history persistence, and ensured secure access with advanced authentication for an optimized, personalized user experience.",
    technologies: ["MonogDB", "Express", "React", "Node.js", "TypeScript"],
    link: "https://github.com/Keerthi-Kolan/AI-CHATBOT",
  },
  {
    title: "Blog Website",
    image: Blog,
    description:
      "Built a React application for managing blog posts with features to create, view, and delete posts. Used JSON file storage for lightweight, backend-free data handling.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://github.com/Keerthi-Kolan/Blog",
  },
  {
    title: "Meal Maestro",
    image: MealMaestro,
    description:
      "Built a personalized meal planning platform with React and the Spoonacular API, serving 5,000+ active users. Key features include custom meal plans, meal regeneration, favorites, and detailed nutritional information for 200+ recipes, all with a dynamic, responsive user experience..",
    technologies: ["React", "Spoonacular API"],
    link: "https://github.com/Keerthi-Kolan/Meal-Maestro",
  },
  {
    title: "Emotion Based Music Recommendation System",
    image: MusicByMood,
    description:
      "Built a Python web app with OpenCV to scan and crop facial images, processing 30-40 emotion predictions in 2-3 seconds. Utilized a machine learning model to identify emotions with 95% accuracy and developed an emotion-based YouTube song recommendation system that increased user engagement by 30%.",
    technologies: ["Python", "OpenCV", "Scikit-learn", "TensorFlow", "Keras"],
    link: "https://github.com/Keerthi-Kolan/emotion_based_music_recommendation_system",
  },
  {
    title: "Todo App",
    image: todoApp,
    description:
      "Built a React Todo app with functionality to add tasks, mark them as completed, and automatically move completed tasks to the bottom for better organization.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://todobykeerthikolan.netlify.app/",
  },
  {
    title: "Portfolio website",
    image: portfolio,
    description:
      "Built a personal portfolio website using React and Tailwind CSS. This is the website you're currently viewing, showcasing my skills, projects, and experience with a rich design.",
    technologies: ["React", "Tailwind CSS"],
    link: "#",
  },
];

export const CONTACT = {
  phoneNo: "+1 510 330 9516 ",
  email: "keerthi.kolan@gmail.com",
};
