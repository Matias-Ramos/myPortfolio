// components
import ServiceSlider from "./ServiceSlider";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
// animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Styles
const outerCtStyle = "h-full bg-primary/30 flex items-center py-36"
const middleCtStyle = "container mx-auto mt-56 xs:mt-96 xl:mt-0"
const innerCtStyle = "flex flex-col xl:flex-row gap-x-8 xl:mt-32 sm:mb-32 xs:mb-28 xs:mt-60 sm:mt-11 md:mt-0"
const headerCtStyle = "text-center flex xl:w-[30vw] flex-col lg:text-left lg:mt-16 mb-4 xl:mb-0 z-20"
const headerStyle = "h2 xl:mt-8"
const descriptionStyle = "mb-4 max-w-[400px] md:max-w-[475px] mx-auto lg:mx-0 text-lg"
const sliderStyle = "w-full xl:max-w-[60%] lg:pb-0"

const Services = () => (
  <div className={outerCtStyle}>
    <Circles />
    <div className={middleCtStyle}>
      <div className={innerCtStyle}>

        {/* header & short description */}
        <div className={headerCtStyle}>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={headerStyle}
          >
            My service <span className="text-accent">.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={descriptionStyle}
          >
            Leveraging my expertise in front-end development and UI/UX design, I build high-performance, user-friendly websites that fit to your individual needs.
          </motion.p>
        </div>

        {/* slider */}
        <motion.div
          variants={fadeIn('down', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className={sliderStyle}
        >
          <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
)
export default Services;
