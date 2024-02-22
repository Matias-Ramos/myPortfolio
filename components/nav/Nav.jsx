// Data
import { navData } from "./navData";
// Components
import Tooltip from "./Tooltip";
// Routing
import Link from "next/link";
import { useRouter } from "next/router";
// Styling
import classNames from "classnames";
const navStyling = `
  flex
  flex-col
  items-center
  gap-y-4
  fixed
  h-max
  bottom-0
  mt-auto
  z-50
  top-0
  w-full
  xl:right-[2%]
  xl:justify-center
  xl:w-16
  xl:max-w-md 
  xl:h-screen`;
const containerStyling = `
  flex
  w-full
  xl:flex-col
  items-center
  justify-between
  xl:justify-center
  gap-y-10
  px-4
  md:px-40
  xl:px-0
  h-[80px]
  xl:h-max
  py-8
  bg-whiteish/20
  backdrop-blur-sm
  text-3xl
  xl:text-xl
  xl:rounded-full
  z-30
  `;
const linkBaseStyles = `
  relative
  flex
  items-center
  group
  hover:text-accent
  transition-all
  duration-300`;

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
    <nav className={navStyling}>
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
    </nav>
  );
};

export default Nav;
