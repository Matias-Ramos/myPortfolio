// Components
import Form from '../../components/contact/Form';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
// Styles
const sectionStyle = 'h-full bg-primary/30'
const outerContainerSt = 'container mx-auto text-center xl:text-left flex items-center justify-center h-full'
const innerContainerSt = 'flex flex-col w-full max-w-[700px]'
const h2Style = 'h2 text-center mb-12'

const Contact = () => (
  <section className={sectionStyle}>
    <div className={outerContainerSt}>
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
  </section>
)

export default Contact;
