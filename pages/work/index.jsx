// Hooks
import { useState } from "react";
// Components
import Header from "../../components/work/Header";
import WorkSliderDesktop from "../../components/work/WorkSliderDesktop";
import WorkSliderMobile from "../../components/work/WorkSliderMobile";
import OffCanvas from "../../components/work/offCanvas/OffCanvas";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Styles
const sectionStyle = "h-full flex items-center xs:max-sm:pb-16"
const outerCtStyle = "w-full md:container mx-auto xl:h-full"
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
    <section className={sectionStyle}>
      <OffCanvas
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        projectDetail={projectDetail}
      />
      <Circles />

      <motion.div 
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={outerCtStyle}
      >
        <div className={innerCtStyle}>

          <Header />
          <WorkSliderDesktop handleDrawer={handleDrawer}/>
          <WorkSliderMobile handleDrawer={handleDrawer}/>
        
        </div>
      </motion.div>
      <Bulb />
    </section>
  )
};

export default Work;
