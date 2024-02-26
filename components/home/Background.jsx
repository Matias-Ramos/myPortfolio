// Animation
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
// Components
import ParticlesContainer from "./ParticlesContainer"
import Avatar from "../Avatar"
// Styles
const outerContainerSt = 'w-[1200px] h-full absolute right-0 bottom-0'
const backgroundImgSt = 'bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 z-0'
const avatarContainerSt = 'w-full h-full max-w-[707px] max-h-[648px] absolute lg:bottom-0 lg:right-[8%] z-20'

const Background = () => (
    <div className={outerContainerSt}>

        <div className={backgroundImgSt}></div>

        <ParticlesContainer />

        <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={avatarContainerSt}>
            <Avatar />
        </motion.div>
    </div>
)

export default Background