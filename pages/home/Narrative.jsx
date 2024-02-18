// Animation
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
// Styles
const h1style = "h1 z-10 lg:mb-0 xl:mb-6 text-danger"
const paragraphStyle = "max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 lg:mb-5 xl:mb-12 text-lg"

const Narrative = () => (
    <>
        <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={h1style}
        >
            Transforming Ideas <br />
            Into <span className="text-accent">Digital Reality</span>
        </motion.h1>

        <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={paragraphStyle}>
            Simplify your path to success.<br />Let's cut through the noise and achieve your goals, together.
        </motion.p>
    </>
)

export default Narrative