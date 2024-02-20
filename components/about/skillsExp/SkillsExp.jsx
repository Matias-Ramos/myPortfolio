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
const containerStyle = "flex flex-col w-full xl:max-w-[48%] xs:pb-28 sm:pb-28 lg:pb-28 lg:align-top h-full"

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