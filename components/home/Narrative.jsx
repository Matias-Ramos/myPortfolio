// Animation
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
// Styles
const h1style = "h1 z-10 lg:mb-0 xl:mb-6 text-danger"
const paragraphStyle = "w-10/12 xl:w-full my-3 xl:my-0 xl:max-w-xl mx-auto xl:mx-0 mb-10 lg:mb-5 xl:mb-12 text-lg"

const Narrative = () => (
    <>
        <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={h1style}
        >
            Embracing IT, <span className="text-accent">holistically.</span>
        </motion.h1>

        <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={paragraphStyle}>
                Proficient in front-end development, with a comprehensive skill set extending across backend, infrastructure, collaboration, problem-solving, and optimization.
        </motion.p> 
    </>
)

export default Narrative