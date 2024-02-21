'use client'

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


const handleSubmit = async (evt) => {
    evt.preventDefault();
  
    // Extract form data
    const name = evt.target.elements.name.value;
    const email = evt.target.elements.email.value;
    const subject = evt.target.elements.subject.value;
    const message = evt.target.elements.message.value;

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      alert('Your message has been sent successfully!');
      evt.target.reset(); // Clear form fields
      window.location.href = '/'; // Redirect to confirmation page

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message.\nPlease try again later or contact me through linkedIn.');
    }
  };
const Form = () => (
    <motion.form
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={formStyle}
        onSubmit={handleSubmit}
    >
        <div className={inputsStyle}>
            <input id="name" type="text" placeholder='Name' className='input' required/>
            <input id="email" type="email" placeholder='Email' className='input' required/>
        </div>
        
        <input id="subject" type="text" placeholder='Subject' className='input' required/>

        <textarea id="message" placeholder='Message' className='textarea' required></textarea>
        
        <button className={btnStyle} type="submit">
            <span className={btnTxtStyle}>
                {`Let's talk`}
            </span>
            <BsArrowRight className={iconStyle} />
        </button>
        
    </motion.form>
)
export default Form