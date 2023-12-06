import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import lottieImg from "../../../assets/lottie/hacker.json";

function Home() {
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

        {/* <h2 className="my-1 job-role"> &lt;/ Web Developer &gt;</h2> */}

        <Player
          src={lottieImg}
          autoplay
          loop
          style={{ height: "400px", width: "350px" }}
        />

        {/* <img
          className="home-wall-logo"
          alt="tiny-side-design"
          src={HomeWallLogo}
        /> */}
      </div>
    </motion.div>
  );
}

export default Home;
