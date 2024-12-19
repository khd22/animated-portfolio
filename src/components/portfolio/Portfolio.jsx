import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import imageGenPhoto from "../../assets/images/imageGen.png";
import facial_recognition from "../../assets/images/Facial_recognition.png";
import FL from "../../assets/images/FL.png";
import kvs from '../../assets/images/kvs.png'



const items = [
  {
    id: 1,
    title: "Federated Learning Platform",
    img: FL,
    desc: "Developed an open-source decentralized federated learning system using IBM's FL library and EdgeLake blockchain technology, earning an invitation to present the project to IBM's technical team and Linux Foundation",

  },
  {
    id: 2,
    title: "ImageGen",
    img: imageGenPhoto,
    desc: "Developed and integrated image generation models, specifically Stable Diusion.",

  },
  {
    id: 3,
    title: "Facial Recognition",
    img: facial_recognition,
    desc: "Built a Full-Stack web application that uses facial recognition to identify people in images and predict age, gender, and names.",
  },
  {
    id: 4,
    title: "Distributed Key-Value Store",
    img: kvs,
    desc: "Implemented a fault-tolerant, replicated key-value store with causal consistency. Built with containerized architecture, the system maintains data availability across multiple nodes, tracks causal dependencies between operations, and ensures eventual consistency across replicas. Features include automated replica management, distributed data replication, and a REST API interface.",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.id === 2 && (
              <a href="https://imageeditv2.d1t6iofhrx2j14.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
              </a>
            )}
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
