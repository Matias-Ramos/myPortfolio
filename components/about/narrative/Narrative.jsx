// Animation
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
// Components
import Counter from './Counter';
import StoryTelling from './StoryTelling';
// Styles
const containerStyle = "flex flex-1 flex-col justify-start h-full relative"
const countersOuterCtSt = "hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
const countersInnerCtSt ="flex flex-1 xl:gap-x-6 "

const Narrative = () => (
  <div className={containerStyle}>

    <StoryTelling />

    <motion.div
      variants={fadeIn('right', 0.6)} 
      initial="hidden"
      animate="show"
      exit="hidden"
      className={countersOuterCtSt}
    >
      <div className={countersInnerCtSt}>
        <Counter category="Years of experience" last={2} />
        <Counter category="Satisfied clients" last={4} />
        <Counter category="Finished projects" last={7} />
      </div>
    </motion.div>
  </div>
)

export default Narrative