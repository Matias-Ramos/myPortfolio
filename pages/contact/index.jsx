// Components
import Form from './Form';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
// Styles
const outerContainerSt = 'h-full bg-primary/30'
const middleContainerSt = 'container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'
const innerContainerSt = 'flex flex-col w-full max-w-[700px] xs:mt-60 lg:mt-44'
const h2Style = 'h2 text-center mb-12'

const Contact = () => (
  <div className={outerContainerSt}>
    <div className={middleContainerSt}>
      <div className={innerContainerSt}>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className={h2Style}
        >
          {`Let's`} <span className='text-accent'>connect.</span>
        </motion.h2>
        
        <Form />

      </div>
    </div>
  </div>
)

export default Contact;
