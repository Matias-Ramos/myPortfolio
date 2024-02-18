// icons
import { RxArrowTopRight } from "react-icons/rx";
// Styles
const swiperSlideStyle = 'bg-[rgba(65,47,123,0.15)] h-[325px] sm:h-[435px] rounded-lg px-6 py-8 flex justify-between sm:flex-col gap-x-6 xs:gap-x-3 sm:gap-x-0 xs:h-auto group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-150';
const iconStyle = 'text-4xl text-accent mb-4';
const titleStyle = 'mb-2 text-lg';
const descriptionStyle = 'max-w-[350px] leading-normal';
const arrowStyle = 'group-hover:rotate-45 group-hover:text-accent transition-all duration-300';

const Card = ({ item }) => (
    <div className={swiperSlideStyle}>

        {/* icon */}
        <div className={iconStyle}>
            {item.icon}
        </div>

        {/* title & descr */}
        <div className='mb-8'>
            <div className={titleStyle}>{item.title}</div>
            <p className={descriptionStyle}>{item.description}</p>
        </div>

        {/* arrow */}
        <div className='text-3xl'>
            <RxArrowTopRight className={arrowStyle} />
        </div>

    </div>
)
export default Card