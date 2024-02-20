// Components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import Narrative from "../../components/about/narrative/Narrative";
import SkillsExp from "../../components/about/skillsExp/SkillsExp";
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
// Styles
const containerStyle = "h-full bg-primary/30 py-32 text-center xl:text-left z-20"
const avatarContainerSt = "hidden xl:flex absolute bottom-0 -left-[370px]"
const infoStyle = "md:container xs:w-5/6 mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6"

const About = () => (
  <div className={containerStyle}>
    <Circles />

    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={avatarContainerSt}>
      <Avatar />
    </motion.div>

    <div className={infoStyle}>
      <Narrative />
      <SkillsExp />
    </div>
  </div>
)

export default About;
