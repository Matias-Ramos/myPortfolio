// Animation
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
// Styles
const headerCtStyle = "text-center flex xl:w-[30vw] flex-col lg:text-left lg:mt-16 mb-4 xl:mb-0 z-20"
const headerStyle = "h2 xl:mt-8"
const descriptionStyle = "mb-4 max-w-[400px] md:max-w-[475px] mx-auto lg:mx-0 text-lg"

const Narrative = () => (
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
)

export default Narrative