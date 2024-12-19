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
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
          {/* <p>
            I focus on helping your business grow
            <br /> by using technology and AI
          </p> */}
          {/* <hr /> */}
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
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
          <p>
            I earned my associate degree in computer science and mathematics from Grossmont College.
            This December, I graduated with a bachelor's degree in computer science from UCSC.
          </p>
        </motion.div>
        
      
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
         <h2>Skills and Experience</h2>
          <p>
            Computer science graduate specializing in full-stack development and machine learning. Experienced in Python, React, and Docker, with proven expertise in implementing federated learning systems and CNN models. Passionate about building scalable applications and solving complex technical challenges through innovative solutions.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
