// Components
import TestimonialSlider from "../../components/testimonials/TestimonialSlider";
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Style
const sectionStyle = "h-full text-center mt-8 xl:mt-0"
const containerSt = "md:container mx-auto h-full flex flex-col justify-center xl:justify-start min-w-10/12  relative z-30 xl:max-w-[80vw]"
const h2style = "h2 xl:mb-0"
const sliderCtStyle = "mb-10"

const Testimonials = () => (
  <section className={sectionStyle}>
    <div className={containerSt}>
      
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
        className={sliderCtStyle}
      >
        <TestimonialSlider />
      </motion.div>
    </div>
  </section>
)
export default Testimonials;
