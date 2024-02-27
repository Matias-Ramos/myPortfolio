// Animation
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
// Components
import Counter from './Counter';
import StoryTelling from './StoryTelling';
// Styles
const containerStyle = "flex flex-col justify-start relative"
const countersOuterCtSt = "hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
const countersInnerCtSt =`flex xl:gap-x-6 
relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0
xl:after:w-[0px]
`

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