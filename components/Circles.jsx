import Image from 'next/image';
// Styles 
const containerStyle = 'w-[200px] xl:w-[300px] absolute -right-16 bottom-0 mix-blend-color-dodge animate-pulse duration-6000 z-10';
const imgStyle = 'w-full h-full'

const Circles = () => (
  <div className={containerStyle}>
    <Image
      src={'/circles.png'}
      width={260}
      height={200}
      className={imgStyle}
      alt='decorative img'
    />
  </div>
)

export default Circles;
