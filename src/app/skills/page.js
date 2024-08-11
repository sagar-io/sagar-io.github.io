"use client"

import SkillsFactory from "./SkillsFactory";
import CertificatesFactory from "./CertificatesFactory";
import { v4 as ID } from "uuid";
import { motion } from "framer-motion";

const skillSet = [
  {
    iconSrc: "assets/images/html.svg",
    skillName: "HTML",
    id: ID(),
  },
  {
    iconSrc: "assets/images/css.svg",
    skillName: "CSS",
    id: ID(),
  },
  {
    iconSrc: "assets/images/javascript.svg",
    skillName: "JavaScript",
    id: ID(),
  },
  {
    iconSrc: "assets/images/react.svg",
    skillName: "React",
    id: ID(),
  },
  {
    iconSrc: "assets/images/cpp.svg",
    skillName: "C++",
    id: ID(),
  },
  {
    iconSrc: "assets/images/typescript.svg",
    skillName: "TypeScript",
    id: ID(),
  },
  {
    iconSrc: "assets/images/nextjs.svg",
    skillName: "Next.js",
    id: ID(),
  },
  {
    iconSrc: "assets/images/firebase.svg",
    skillName: "Google Firebase",
    id: ID(),
  },
  {
    iconSrc: "assets/images/sass.svg",
    skillName: "Sass",
    id: ID(),
  },
];

const certificates = [
  {
    url: "assets/certificates/javascript_certificate99.png",
    id: ID(),
  },
];

const skillElements = skillSet.map((skill) => {
  return <SkillsFactory key={skill.id} {...skill} />;
});

const certificateELements = certificates.map((certificate) => {
  return <CertificatesFactory key={certificate.id} {...certificate} />;
});

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-120%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "120%" }}
      transition={{type:"spring", delay: 0.1}}
      className="skills-page-container"
    >
      <div className="skills-wrapper">
        {/* <h2 className="">Skills</h2> */}
        <section className="skills">{skillElements}</section>
      </div>


      <div className="certificates-wrapper">
        <h2>Certificates</h2>
        <div className="certificates">{certificateELements}</div>
      </div>
    </motion.div>
  );
}

export default Skills;
