import aboutImg from "../../../assets/images/about09-opt.jpg";
import { motion } from "framer-motion";

const discription = (
  <div>
    👋 Hi there! <br />I combine creativity and technical skills to engineer
    dynamic projects. I'm a Web Developer, passionate about creating
    innovative and intuitive user experiences. I love the open-source culture.
    <span className="highlight">
      By participating in various Hackathons and winning various developer
      competitions, I learnt how to make great products with teams.
    </span>
    I enjoy tackling complex challenges and finding creative solutions to tough
    problems. I'm constantly learning and pushing myself to be the best
    developer I can be, and I'm excited to bring my skills and expertise to your
    next project 🌱 
    <br/><br/>
    Outside of Programming, I run at the park and binge watch
    shows. World tour is the thing that excites me all the time.
  </div>
);

function About() {
  return (
    <motion.div className="about-wrapper">
      <div className="text-img-container">
        <p className="text">{discription}</p>
        <img src={aboutImg} alt="laptop-with-book" />
      </div>
    </motion.div>
  );
}

export default About;
