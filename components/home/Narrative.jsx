// Animation
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
// Styles
const h1style = "h1 z-10 lg:mb-0 xl:mb-6 text-danger"
const paragraphStyle = "max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 lg:mb-5 xl:mb-12"

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
                Bridging the gap between front-end and the bigger picture.<br />As a front-end developer with <b>holistic technical knowledge</b>, I collaborate effectively with teams, troubleshoot complex issues, and drive process optimization with a commitment to excellence.
        </motion.p>
    </>
)

export default Narrative