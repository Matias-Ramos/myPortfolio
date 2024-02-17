import Image from "next/image";
// Styles
const containerStyle = "hidden xl:flex xl:max-w-none";
const imgStyle = "translate-z-0 w-full h-full";

const Avatar = () => (
  <div className={containerStyle}>
    <Image
      src={"/avatar.png"}
      width={737}
      height={678}
      alt="Matias picture"
      className={imgStyle}
    />
  </div>
)


export default Avatar;
