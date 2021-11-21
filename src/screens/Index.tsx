import { Link } from "react-router-dom";
import Logo from "../assets/logoColor05.png";
import Icon from "../components/Icon";
export default function IndexScreen() {
  return (
    <div className="center-content screen">
      <img src={Logo} alt="logo" />
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
    </div>
  );
}
