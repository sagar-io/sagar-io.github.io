"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Experience from "../components/Pages/Experience/Experience.js";
import Projects from "../components/Pages/Projects/Projects.js";
import DinoGame from "../components/DinoGame/DinoGame.js";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const name = "#Sagar";

// TODO: add feature flag to handle this -
const showDinoGame = false;

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      type: "spring",
      damping: 20,
      bounce: 0.9,
    },
  },
};
const word = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Page() {
  return (
    <div>
      <section id="home">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1 }}
          className="home"
        >
          <div>
            <Player
              src={require("../../public/assets/lottie/hacker.json")}
              autoplay
              loop
              style={{ height: "400px", width: "350px" }}
            />
          </div>
          <div>
            <motion.div
              className="signature"
              initial="hidden"
              animate="visible"
              variants={sentence}
            >
              {name.split("").map((char, i) => (
                <motion.span custom={i} variants={word} key={char + "-" + i}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <p>
              I'm a software engineer with a passion for building scalable and
              efficient systems. I've recently wrapped up my internship as a
              Frontend Engineer Intern at Smallcase (raised $50M). I worked with{" "}
              <span className="skill-set">
                HTML, CSS/Sass, JavaScript, React, TypeScript, Next.js, C++.
              </span>{" "}
            </p>
          </div>
        </motion.div>
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="footer">
        {showDinoGame && <DinoGame />}
      </section>
    </div>
  );
}
