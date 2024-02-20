// Animation
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
// Icons
import { BsArrowRight } from 'react-icons/bs'
// Styles
const formStyle = 'flex-1 flex flex-col gap-6 w-full mx-auto xs:mb-28'
const inputsStyle = 'flex gap-x-6 w-full'
const btnStyle =  'btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
const btnTxtStyle = 'group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'
const iconStyle = '-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'

const Form = () => (
    <motion.form
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={formStyle}
    >
        <div className={inputsStyle}>
            <input type="text" placeholder='name' className='input' />
            <input type="email" placeholder='email' className='input' />
        </div>
        
        <input type="text" placeholder='subject' className='input' />

        <textarea placeholder='message' className='textarea'></textarea>
        
        <button className={btnStyle}>
            <span className={btnTxtStyle}>
                Let's talk
            </span>
            <BsArrowRight className={iconStyle} />
        </button>
        
    </motion.form>
)
export default Form