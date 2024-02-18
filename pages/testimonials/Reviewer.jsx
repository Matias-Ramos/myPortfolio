// Components
import Image from 'next/image';
// Styles
const outerContainerSt = 'w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx:auto xl:mx-0 '
const innerContainerSt = 'flex flex-col justify-center text-center'
const avatarStyle = 'mb-2 mx-auto'
const roleStyle = 'text-[12px] uppercase font-extralight tracking-widest'

const Reviewer = ({ person }) => (
    <div className={outerContainerSt}>
        <div className={innerContainerSt}>

            {/* avatar */}
            <div className={avatarStyle}>
                <Image src={person.image} width={100} height={100} alt={person.name} />
            </div>

            {/* name */}
            <div className='text-lg'>
                {person.name}
            </div>

            {/* role */}
            <div className={roleStyle}>
                {person.role}
            </div>
            
        </div>
    </div>
)
export default Reviewer