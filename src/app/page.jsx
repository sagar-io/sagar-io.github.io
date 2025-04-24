"use client"

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});
const lottieImg = "/assets/lottie/hacker.json";
const name = "#Sagar";
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
    <motion.div
      className="home-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="home">
        <motion.div
          className="signature my-1"
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

        <h2 className="my-1 job-role"> &lt; Software Engineer /&gt;</h2>

        <Player
          src={lottieImg}
          autoplay
          loop
          style={{ height: "400px", width: "350px" }}
        />
      </div>
    </motion.div>
  );
}
