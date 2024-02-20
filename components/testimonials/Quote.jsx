// icons
import { FaQuoteLeft } from 'react-icons/fa'
// Styles
const quoteCtStyle = 'flex-1 flex flex-col justify-center relative before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] xl:pl-20 xs:mb-12 sm:mb-0'
const quoteIconStyle = 'text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'
const quoteMsgStyle = 'xl:text-lg text-center md:text-left '

const Quote = ({ person }) => (
    <div className={quoteCtStyle}>
        
        <div className='mb-4'>
            <FaQuoteLeft className={quoteIconStyle} />
        </div>
        
        <div className={quoteMsgStyle}>
            {person.message}
        </div>
    </div>
)

export default Quote