import AI_CHATBOT from "../assets/projects/AI_CHATBOT.png";
import todoApp from "../assets/projects/TodoApp.png";
import MealMaestro from "../assets/projects/Meal_Maestro.png";
import MusicByMood from "../assets/projects/Music_by_Mood.png";
import Blog from "../assets/projects/Blog.png";
import portfolio from "../assets/projects/portfolio.png";
import e_commerce from "../assets/projects/e_commerce.jpeg";
export const HERO_CONTENT = `Dynamic Computer Science graduate with a 4.0 GPA and hands-on expertise in building scalable, user-centric software. Skilled in Java, Python, and cutting-edge tech like AWS, React, and TensorFlow. Creator of innovative projects like an AI-powered chatbot and emotion-based music recommendation systems, boosting engagement and efficiency. Actively seeking opportunities to deliver impactful software solutions.`;

export const ABOUT_TEXT = `From the beginning of my academic journey, I have been driven by a deep curiosity about how systems work and how they can be improved. This curiosity naturally evolved into a passion for software engineering, where I found excitement in designing, building, and refining solutions that solve real-world challenges.

\nDuring my Bachelor's in Computer Science, I interned at Chronodat LLC, where I worked on a Human Resource Management platform supporting over 50 enterprise clients. I contributed across the full stack, developing RESTful APIs with Java Spring, building responsive user interfaces with React, and participating in backend and cloud optimization. One of my most impactful contributions was developing a licensing microservice that maintained 100 percent uptime while handling more than 10,000 daily validations. I also set up CI/CD pipelines using GitHub Actions and Terraform, improving deployment speed and consistency.

\nThat hands-on experience inspired me to further my education with a Master’s in Computer Science, where I explored topics like distributed systems, machine learning, and cloud-native development. Outside the classroom, I pursued projects that allowed me to solve challenging technical problems, such as building a serverless transcription tool with AWS Lambda, S3, and Cognito, developing an AI chatbot using the MERN stack and OpenAI API, and designing a scalable e-commerce platform with Django and PostgreSQL.

\nI thrive in environments that challenge me to think critically and solve problems creatively. Whether I am building secure backend services or crafting intuitive frontend experiences, I am committed to writing clean, maintainable code and delivering meaningful results.

\nI am currently seeking a full-time opportunity as a Software Development Engineer where I can continue learning, contribute to innovative teams, and bring my passion for problem-solving into every line of code.`;

export const EXPERIENCES = [
  {
    year: "May 2022 - August 2022",
    role: "Application Developer Intern",
    company: "Chronodat",
    description: `During my internship at Chronodat LLC, \n• I contributed to the development of an enterprise-grade Human Resource Management platform serving over 50 clients.\n• I was responsible for designing and implementing RESTful APIs using Java Spring, building responsive and modular user interfaces with React and JavaScript, and participating in backend optimization and cloud infrastructure efforts.\n• Notably, I engineered a licensing microservice that maintained 100 percent uptime while processing more than 10,000 validations daily, playing a key role in ensuring client compliance. I also implemented CI/CD pipelines using GitHub Actions and Terraform, which significantly reduced deployment times and improved operational efficiency. This experience provided me with valuable exposure to full-stack development, cloud-native architecture, and the challenges of building scalable, secure, and maintainable systems.`,
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
      "Built a dynamic blog app with React and React Router, enabling full CRUD functionality for 100+ posts. Implemented seamless page-less navigation, improving user experience.Utilized real-time state management for smooth post creation, editing, and deletion, reducing UI lag by 30\\%. Added unique post identifiers, ensuring 100% accuracy in viewing, updating, and deleting posts.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://github.com/Keerthi-Kolan/Blog",
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
    title: "E-Commerce Plactform",
    image: e_commerce,
    description:
      "Built a Django eCommerce site with user/guest checkout and cookie-based cart persistence, boosting conversions by 20\\%. Integrated PayPal for secure international payments, supporting account and card transactions. Designed a scalable data model with 6 core entities for efficient order management. Developed 3 core templates (Store, Cart, Checkout) for seamless product browsing and checkout.",
    technologies: ["Python", "Django"],
    link: "https://github.com/Keerthi-Kolan/ECommerce_Website",
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
  email: "keerthi.kolan@gmail.com",
};
