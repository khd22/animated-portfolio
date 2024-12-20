// Services.jsx
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <div className="peopleImage"></div>
          <h1>
            <motion.b style={{ color: "orange" }}>CS</motion.b> graduate
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b style={{ color: "orange" }}>Passionate</motion.b> about solving problems
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants} style={{ paddingBottom: "50px" }}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Education</h2>
          <ul className="education-list">
            <li>
              
              <p><strong>Bachelor of Science in Computer Science</strong>University of California, Santa Cruz</p>
              <p>Graduated: December 2023</p>
            </li>
            {/* <li>
              <strong>Associate Degree in Computer Science and Mathematics</strong>
              <p>Grossmont College</p>
            </li> */}
          </ul>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Skills</h2>
          <p>
          focused on full-stack development and machine learning. Proficient in Python, React, and Docker, with experience in ML models and scalable applications. Passionate about solving bussiness problems through technology.
          </p>
          {/* <ul className="education-list">
            <li>
              <p>Full-stack development</p>
            </li>
            <li>
              <p>Machine learning</p>
            </li>
            <li>
              <p>Web development</p>
            </li>
          </ul> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;