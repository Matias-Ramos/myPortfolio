import Image from 'next/image';
// Styles
const containerStyle = 'absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-6000 z-10 w-[200px] xl:w-[260px]'
const imgStyle = 'w-full h-full'

const Bulb = () => (
  <div className={containerStyle}>
    <Image
      src={'/bulb.png'}
      width={260}
      height={200}
      className={imgStyle}
      alt='decorative img'
    />
  </div>
)

export default Bulb;
