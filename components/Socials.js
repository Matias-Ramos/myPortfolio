import Link from "next/link";
// icons
import { IconContext } from "react-icons";
import {
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={"/"} className="hover:text-accent transition-all duration-300">
    <IconContext.Provider value={{ size: "22px" }}>
      <FaLinkedin />
    </IconContext.Provider>
    </Link>
    <Link href={"/"} className="hover:text-accent transition-all duration-300">
    <IconContext.Provider value={{ size: "22px" }}>
      <FaGithub />
    </IconContext.Provider>
    </Link>
  </div>
  )
};

export default Socials;
