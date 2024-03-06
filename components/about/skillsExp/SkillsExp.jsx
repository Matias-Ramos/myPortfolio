// data
import aboutData from '../aboutData'
// Hooks
import { useState } from "react";
// Animation
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
import Buttons from './Buttons';
import Details from './Details';
// Styles
const containerStyle = "h-auto flex flex-col w-full lg:align-top"

const SkillsExp = () => {

  const [index, setIndex] = useState(0);

  return (
    <motion.div
      variants={fadeIn('left', 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={containerStyle}
    >

      <Buttons index={index} setIndex={setIndex} aboutData={aboutData} />
      <Details index={index} aboutData={aboutData} />

    </motion.div>
  )
}

export default SkillsExp