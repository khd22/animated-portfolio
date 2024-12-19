import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import linkedinIcon from "../../assets/images/linkedin.png";


const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/khaled-al-jaaidi-896141228" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn"   style={{ width: "32px", height: "32px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
