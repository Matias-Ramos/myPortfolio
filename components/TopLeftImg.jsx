// Components
import Image from "next/image";
// Styling
const containerStyling =
  "absolute left-0 top-0 mix-blend-color-dodge z-20 w-[200px] xl:w-[400px] opacity-50";

const TopLeftImg = () => (
  <div className={containerStyling}>
    <Image
      src="/top-left-img.png"
      width={400}
      height={400}
      priority={false}
      alt="decorative img"
    />
  </div>
);

export default TopLeftImg;
