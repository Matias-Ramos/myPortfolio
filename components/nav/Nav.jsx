// Data
import { navData } from "./navData";
// Components
import Tooltip from "./Tooltip";
// Routing
import Link from "next/link";
import { useRouter } from "next/router";
// Animation
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
// Styling
import classNames from "classnames";
const navStyling = `
  bottom-0 w-full flex flex-col items-center gap-y-4 mt-auto z-40
  xs:max-sm:relative xl:fixed xl:right-[2%] xl:justify-center xl:w-16 xl:max-w-md  xl:h-screen
  `;
const containerStyling = `
  h-[80px] w-full px-4 py-8 md:px-40 text-3xl flex items-center justify-between gap-y-10 bg-whiteish/20 backdrop-blur-sm
  xl:px-0 xl:h-max xl:justify-center xl:text-xl xl:rounded-full xl:flex-col
  `;
const linkBaseStyles = `
  relative flex items-center group hover:text-accent transition-all duration-300
  `;

const Nav = () => {

  const router = useRouter();
  const pathname = router.pathname;

  const getLinkClasses = (link) => {
    return classNames(
      linkBaseStyles,
      { "text-accent": link.path === pathname },
    );
  };

  return (
    <motion.nav 
      variants={fadeIn('left', 0.1)} 
      initial="hidden"
      animate="show"
      exit="hidden"
      className={navStyling}
    >
      <div className={containerStyling}>
        {navData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={getLinkClasses(link)}
          >
            <Tooltip link={link} />
            {link.icon}
          </Link>
        ))
        }
      </div>
    </motion.nav>
  );
};

export default Nav;
