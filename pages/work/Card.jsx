// icons
import { BsArrowRight } from 'react-icons/bs'
// Components
import Image from 'next/image';
// Styles
const outerContainerSt = 'relative rounded-lg overflow-hidden flex items-center justify-center group'
const innerContainerSt = 'flex items-center justify-center relative overflow-hidden group'
const overlayGradientSt = 'absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] top-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700z'
const legendOuterCtSt = 'absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 text-[13px] tracking-[0.2em]'
const legendInnerCtSt = 'flex items-center gap-x-2'
const partTwoStyle = 'translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'
const iconStyle = 'text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'

const Card = ({ handleDrawer, project }) => (
    <div
        className={outerContainerSt}
        role="button"
        onClick={() => handleDrawer(project)}
    >
        <div className={innerContainerSt}>
            
            {/* image */}
            <Image src={project.img} width={500} height={300} alt={`${project.title}`} />

            {/* overlay gradient */}
            <div className={overlayGradientSt}></div>

            {/* legend */}
            <div className={legendOuterCtSt}>
                <div className={legendInnerCtSt}>
                    {/* part 1 */}
                    <div className='delay-100'> SEE </div>
                    {/* part 2 */}
                    <div className={partTwoStyle}> DETAILS </div>
                    {/* icon */}
                    <div className={iconStyle}> <BsArrowRight /> </div>
                </div>
            </div>
        </div>
    </div>
)
export default Card