// Hooks
import { useState } from "react";
// Components
import Header from "../../components/work/Header";
import WorkSlider from "../../components/work/WorkSlider";
import OffCanvas from "../../components/work/offCanvas/OffCanvas";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
// Styles
const outerCtStyle = "h-full bg-primary/30 flex items-center xs:max-sm:pb-16"
const middleCtStyle = "w-full md:container mx-auto"
const innerCtStyle = "flex flex-col xl:flex-row gap-x-8"

const Work = () => {

  // OffCanvas mgmt.
  const [isOpen, setIsOpen] = useState(false);
  const [projectDetail, setProjectDetail] = useState(false);
  const handleDrawer = (project) => {
    setIsOpen(!isOpen);
    setProjectDetail(project)
  };

  return (
    <div className={outerCtStyle}>
      <OffCanvas
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        projectDetail={projectDetail}
      />
      <Circles />
      <div className={middleCtStyle}>
        <div className={innerCtStyle}>

          <Header />
          <WorkSlider handleDrawer={handleDrawer}/>

        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Work;
