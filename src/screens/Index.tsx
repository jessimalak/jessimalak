import { Link } from "react-router-dom";
import Logo from "../assets/logoColor05.png";
import Icon from "../components/Icon";
import { motion } from 'framer-motion'
export default function IndexScreen() {
  return (
      <div className="center-content screen">
          <motion.img
              src={Logo}
              alt="logo"
              transition={{type: "spring" }}
              initial={{ translateY: '-100%', opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }} />
          <motion.article
              transition={{ duration: 1 }}
              initial={{  opacity: 0 }}
              animate={{ opacity: 1 }}>
              <h2>
                Diseñadora multimedia, desarrolladora web y móvil, y
                amante apasionada de la programación.
              </h2>
              <div className='social-icons'>
                <a
                  href="http://instagram.com/jessimalak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="logo-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jessimalak/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="logo-linkedin" />
                </a>
                <a
                  href="http://github.com/jessimalak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="logo-github" />
                </a>
               </div>
               <Link to='projects'>Ver mis proyectos</Link>
          </motion.article>
    </div>
  );
}
