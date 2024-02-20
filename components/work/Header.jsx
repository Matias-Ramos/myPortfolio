// Animation
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
// Styles
const containerStyle = "text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"
const h2style = "h2 xl:mt-12"

const Header = () => (
    <div className={containerStyle}>
        <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={h2style}
        >
            My work <span className="text-accent">.</span>
        </motion.h2>
    </div>
)

export default Header