"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "July 2024 - Present",
    title: "Frontend Engineer Intern",
    company: "smallcase",
    description:
      "Working on full-stack development using Next.js, React, and Node.js. Implemented key features and improved application performance.",
  },
  {
    period: "June 2023 - Dec 2023",
    title: "Frontend Developer Intern",
    company: "Company Name 2",
    description:
      "Developed responsive web applications using React.js and modern CSS frameworks. Collaborated with the design team to implement UI/UX improvements.",
  },
  {
    period: "Jan 2023 - May 2023",
    title: "Web Development Intern",
    company: "Company Name 3",
    description:
      "Built and maintained client websites. Worked with HTML, CSS, JavaScript, and various web development tools.",
  },
];

export default function Experience() {
  return (
    <motion.div
      className="experience-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
    >
      <h1>Experience</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? "-100%" : "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, stiffness: 100, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">{exp.period}</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
