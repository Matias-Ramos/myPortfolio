// Components
import TooltipIcon from '../../../components/TooltipIcon'
// Styles
const outerContainerSt = "py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start text-lg "
const innerContainerSt = "flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 "
const titleStyle = "font-light mb-2 md:mb-0"
const iconsContainerSt = "flex gap-x-4"
const iconStyle = "text-2xl text-white"

const Details = ({ index, aboutData }) => (
    <div className={outerContainerSt}>

        {aboutData[index].info.map((item, itemIndex) => (
            <div key={itemIndex} className={innerContainerSt}>

                {/* title */}
                <span className={titleStyle}>{item.title}</span>
                <span className="hidden md:flex">-</span>
                <span>{item.stage}</span>

                {/* icons */}
                <div className={iconsContainerSt}>

                    {item.icons?.map((language, itemIndex) => (
                        <div className={iconStyle} key={itemIndex}>
                            <TooltipIcon language={language} />
                        </div>
                    ))}

                </div>
            </div>
        ))}
    </div>
)

export default Details