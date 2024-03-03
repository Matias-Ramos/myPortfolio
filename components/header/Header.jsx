// Components
import Link from 'next/link';
import Socials from './Socials';
// Animation
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
// Style
const headerStyle = `
relative w-full flex items-center px-1 xs:px-0
max-xl:color-fusion max-xl:bg-primary/30
xl:px-0 xl:h-[90px] xl:absolute z-50
`;
const containerStyle = "container mx-auto";
const innerCtStyle = 'flex xs:flex-col sm:flex-row justify-between items-center gap-y-6 xs:gap-y-2 py-8';
const linkCtStyle = 'w-auto h-[48px] text-4xl'

const Header = () => (
  <motion.header
    variants={fadeIn('down', 0.1)} 
    initial="hidden"
    animate="show"
    exit="hidden"
    className={headerStyle}
  >
    <div className={containerStyle}>
      <div className={innerCtStyle}>

        <Link href={"/"}>
          <div className={linkCtStyle}>
            <span className='font-bold'>matias {" "}</span>
            <span className='font-thin'>ramos</span>
            <span className='text-accent'>.</span>
          </div>
        </Link>
        <Socials />

      </div>
    </div>
  </motion.header>
)

export default Header;
