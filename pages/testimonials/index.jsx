// components
import TestimonialSlider from "../../components/TestimonialSlider";
// animation
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="md:container mx-auto h-full flex flex-col justify-center min-w-10/12 xs:mt-16 xl:mt-4 ">
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="xs:mb-20 md:mb-28 xl:mb-0"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  )
};

export default Testimonials;
