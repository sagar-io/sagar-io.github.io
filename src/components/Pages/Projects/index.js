import ProjectFactory from "./ProjectFactory";
import { v4 as ID } from "uuid";
import { motion } from "framer-motion";

function Projects() {
  const project = [
    {
      src: "assets/images/bookbud_website.jpg",
      liveSiteUrl: "https://bookbud-io.netlify.app/",
      gitHubUrl: 'https://github.com/sagar-io/bookbud',
      id: ID(),
    },
    {
      src: "assets/images/solar-ladder-03.jpg",
      gitHubUrl: "https://github.com/sagar-io/solar-ladder-assignment",
      liveSiteUrl: "https://solar-ladder.netlify.app/books/inventory",
      id: ID(),
    },
    {
      src: "assets/images/Quiz-App-screenshot.png",
      gitHubUrl: "https://github.com/sagar-io/react-quiz-app",
      liveSiteUrl: "https://react-quiz-io.netlify.app/",
      id: ID(),
    },
    {
      src: "assets/images/pro-site.jpg",
      gitHubUrl: "https://github.com/sagar-io/Pro-Site-1",
      liveSiteUrl: "https://pro-site-1.netlify.app/",
      id: ID(),
    },
    {
      src: "assets/images/music-site.jpg",
      gitHubUrl: "https://github.com/sagar-io/music-therapy",
      liveSiteUrl: "https://music-therapy-io.netlify.app/",
      id: ID(),
    },
    {
      src: "assets/images/meme-generator-screenshot.jpg",
      gitHubUrl: "https://github.com/sagar-io/React-Meme-Generator",
      liveSiteUrl: "https://meme-generator-io.netlify.app",
      id: ID(),
    },
    {
      src: "assets/images/Tenzie-Game-screenshot.jpg",
      gitHubUrl: "https://github.com/sagar-io/React-Tenzie-Game",
      liveSiteUrl: "https://tenzie-io.netlify.app/",
      id: ID(),
    },
    {
      src: "assets/images/space_website.jpg",
      gitHubUrl: "https://github.com/sagar-io/react-space-website",
      liveSiteUrl: "https://space-io.netlify.app",
      id: ID(),
    },
    {
      src: "assets/images/qr-code-screenshot.png",
      gitHubUrl: "https://github.com/sagar-io/QR-Code-Generator",
      liveSiteUrl: "https://qr-cod.netlify.app/",
      id: ID(),
    },
  ];

  const projectElements = project.map((project) => {
    return <ProjectFactory key={project.id} {...project} />;
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{type:"spring", delay: 0.1}}
      className="projects-wrapper"
    >
      {/* <h2>Applications of my Skills</h2> */}
      <div className="projects">{projectElements}</div>
    </motion.div>
  );
}

export default Projects;
