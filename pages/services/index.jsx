
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import Narrative from "./Narrative";
import Slider from "./Slider";
const outerCtStyle = "h-full bg-primary/30 flex items-center py-36"
const middleCtStyle = "container mx-auto mt-56 xs:mt-96 xl:mt-0"
const innerCtStyle = "flex flex-col xl:flex-row gap-x-8 xl:mt-32 sm:mb-32 xs:mb-28 xs:mt-60 sm:mt-11 md:mt-0"

const Services = () => (
  <div className={outerCtStyle}>
    <Circles />
    <div className={middleCtStyle}>
      <div className={innerCtStyle}>

        <Narrative />
        <Slider />

      </div>
    </div>
    <Bulb />
  </div>
)
export default Services;
