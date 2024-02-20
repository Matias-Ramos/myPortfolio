// Components
import CountUp from "react-countup";
// Styles
const containerStyle = "relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 "
const counterStyle = "text-2xl xl:text-4xl font-extrabold text-accent mb-2"
const categoryStyle = "text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]"

const Counter = ({ category, last }) => (
    <div className={containerStyle}>

        <div className={counterStyle}>
            <CountUp start={0} end={last} delay={1.5} duration={5} />
            <span> + </span>
        </div>

        <div className={categoryStyle}>
            {category}
        </div>
        
    </div>
)

export default Counter