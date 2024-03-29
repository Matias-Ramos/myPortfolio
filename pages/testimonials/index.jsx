// Components
import TestimonialSlider from "../../components/testimonials/TestimonialSlider";
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Style
const sectionStyle = "h-full text-center"
const containerSt = "md:container mx-auto h-full flex flex-col justify-center xl:justify-start min-w-10/12  relative z-30"
const h2style = "h2 mb-8 xl:mb-0"
const sliderCtStyle = "max-lg:max-w-[100vw] xs:mb-20 md:mb-28 xl:mb-0"

const Testimonials = () => (
  <section className={sectionStyle}>
    <div className={containerSt}>
      
      {/* title */}
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={h2style}
      >
        What clients <span className="text-accent">say.</span>
      </motion.h2>

      {/* slider */}
      <motion.div
        variants={fadeIn('down', 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={sliderCtStyle}
      >
        <TestimonialSlider />
      </motion.div>
    </div>
  </section>
)
export default Testimonials;
