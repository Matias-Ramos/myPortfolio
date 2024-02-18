// icons
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// Styles
const containerStyle = "flex items-center gap-x-5 text-lg"
const anchorStyle = "hover:text-accent transition-all duration-300"

const Socials = () => (
  <div className={containerStyle}>
    <a
      href={"https://www.linkedin.com/in/matias-ramos-computacion/"}
      className={anchorStyle}
      rel="noopener noreferrer"
      target="_blank"
    >
      <IconContext.Provider value={{ size: "22px" }}>
        <FaLinkedin />
      </IconContext.Provider>
    </a>

    <a
      href={"https://github.com/Matias-Ramos"}
      rel="noopener noreferrer"
      target="_blank"
      className={anchorStyle}
    >
      <IconContext.Provider value={{ size: "22px" }}>
        <FaGithub />
      </IconContext.Provider>
    </a>
  </div>
)
export default Socials;
