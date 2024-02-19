// Components
import TestimonialSlider from "./TestimonialSlider";
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Style
const outerContainerSt = "h-full bg-primary/30 py-32 text-center"
const InnerContainerSt = "md:container mx-auto h-full flex flex-col justify-center min-w-10/12 xs:mt-52 sm:mt-16 xl:mt-4"
const h2style = "h2 mb-8 xl:mb-0"
const sliderCtStyle = "xs:mb-20 md:mb-28 xl:mb-0"

const Testimonials = () => (
  <div className={outerContainerSt}>
    <div className={InnerContainerSt}>
      
      {/* title */}
      <motion.h2
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={h2style}
      >
        What clients <span className="text-accent">say.</span>
      </motion.h2>

      {/* slider */}
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={sliderCtStyle}
      >
        <TestimonialSlider />
      </motion.div>
    </div>
  </div>
)
export default Testimonials;
