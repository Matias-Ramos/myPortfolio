// Styles
const containerStyle = "hidden xl:flex xl:max-w-none";
const imgStyle = "translate-z-0 w-full h-full";

const Avatar = () => (
  <div className={containerStyle}>
    <img
      src={"/avatar3.png"}
      width="100%"
      height="100%"
      alt="Matias picture"
      className={imgStyle}
    />
  </div>
)


export default Avatar;
