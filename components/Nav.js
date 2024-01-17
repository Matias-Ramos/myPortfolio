// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
// Routing
import Link from "next/link";
import { useRouter } from "next/router";
// Styling
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
const outerContainerStyling = `
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
  bg-white/10
  backdrop-blur-sm
  text-3xl
  xl:text-xl
  xl:rounded-full`;

const tooltipTriangleStyling = `
  border-solid
  border-l-white
  border-l-8
  border-y-transparent
  border-y-[6px]
  border-r-0
  absolute
  -right-2`;
const tooltipOuterCtStyling = `
  absolute
  pr-14
  right-0
  hidden
  xl:group-hover:flex`;
const tooltipMiddleCtStyling = `
  bg-white
  relative
  flex
  text-primary
  items-center
  p-[6px]
  rounded-[3px]`;
const tooltipInnerCtStyling = `
  text-[12px]
  leading-none
  font-semibold
  capitalize`;

const linkBaseStyles = `
  relative
  flex
  items-center
  group
  hover:text-accent
  transition-all
  duration-300`;
const linkActiveStyles = "text-accent";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  

  return (
    <nav className={navStyling}>
      <div className={outerContainerStyling}>
        {navData.map((link, index) => {
            const linkStyles =
              link.path === pathname
                ? `${linkBaseStyles} ${linkActiveStyles}`
                : linkBaseStyles;

          return (
            <Link
              key={index}
              href={link.path}
              className={linkStyles}
            >
              {/* tooltip */}
              <div className={tooltipOuterCtStyling}>
                <div className={tooltipMiddleCtStyling}>
                  <div className={tooltipInnerCtStyling}>
                    {link.name}
                  </div>

                  {/* triangle */}
                  <div className={tooltipTriangleStyling}></div>
                </div>
              </div>

              {/* icon */}
              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
