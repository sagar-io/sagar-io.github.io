"use client";
import { motion } from "framer-motion";
import ProjectFactory from "./ProjectFactory";
import { v4 as ID } from "uuid";

function Projects() {
  const project = [
    {
      src: "assets/images/bookbud_website.jpg",
      liveSiteUrl: "https://bookbud-io.netlify.app/",
      gitHubUrl: "https://github.com/sagar-io/bookbud",
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
  ];

  return (
    <motion.div
      className="projects-wrapper"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h1>Projects</h1>
      <div className="projects">
        {project.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: index * 0.1,
            }}
          >
            <ProjectFactory {...project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
