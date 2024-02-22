// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
// Styles
const paragraphStyle = "max-w-[500px]  mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-lg"

const StoryTelling = () => (
    <>
        <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
        >
            Design that takes business to the <span className="text-accent">next level</span>.
        </motion.h2>

        <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={paragraphStyle}
        >
            In 2022, I launched my freelance development career, partnering with passionate entrepreneurs across <span className="font-semibold">diverse industries</span>, including but not limited to a Colombian fitness studios, a real estate agency, and a car dealership from Buenos Aires.
        </motion.p>
    </>
)

export default StoryTelling