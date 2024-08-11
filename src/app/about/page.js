"use client"
import { motion } from "framer-motion";

const discription = (
  <div>
    👋 Hi there! I combine creativity and technical skills to engineer dynamic
    projects. I'm an engineer, passionate about creating innovative and
    intuitive solutions. I have learned how to work collaboratively in a team
    with my experience in various organizations. I love tackling complex
    challenges and finding optimal solutions to tough problems. I'm constantly learning
    and pushing myself to be the best engineer I can be.
    I'm excited to
    bring my skills and expertise to your next project 🌱
    <br />
    <br />
    Besides coding, I enjoy jogging in the park and binge-watching shows 👀 and traveling the world always gets me excited.
  </div>
);

function About() {
  return (
    <motion.div className="about-wrapper">
      <div className="text-img-container">
        <div className="text">{discription}</div>
        <img src="assets/images/about.jpg" alt="laptop-with-book" />
      </div>
    </motion.div>
  );
}

export default About;
