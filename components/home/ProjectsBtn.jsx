// Components
import Image from 'next/image';
// Navigation
import Link from 'next/link';
// Icons
import { HiArrowRight } from 'react-icons/hi2';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Styles
const containerStyle = 'mx-auto xl:mx-0';
const linkStyle = 'relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group';
const imgStyle = 'animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]';
const arrowIconStyle = 'absolute text-4xl group-hover:translate-x-2 transition-all duration-300'

const PlainBtn = () => (
  <div className={containerStyle}>
    <Link href={'/work'} className={linkStyle}>
      <Image
        src={'/rounded-text.png'}
        width={141}
        height={148}
        alt='Check my projects img'
        className={imgStyle}
      />
      <HiArrowRight className={arrowIconStyle} />
    </Link>
  </div>
)

// Styles
const mobileBtnStyle = "flex justify-center relative xl:hidden"
const desktopBtnStyle = 'hidden xl:flex z-20'

const ProjectsBtn = () => (
  <>

    <div className={mobileBtnStyle}>
      <PlainBtn />
    </div>

    <motion.div
      className={desktopBtnStyle}
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <PlainBtn />
    </motion.div>
  </>
)



export default ProjectsBtn;
