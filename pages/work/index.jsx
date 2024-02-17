// hooks
import { useState } from "react";
// data 
import projectList from "./projectList";
// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import OffCanvas from "../../components/OffCanvas";
// animation
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Work = () => {

  // OffCanvas mgmt.
  const [isOpen, setIsOpen] = useState(false);
  const [projectDetail, setProjectDetail] = useState(false);
  const handleDrawer = (project) => {
    setIsOpen(!isOpen);
    setProjectDetail(project)
  };

  return (
    <div className="h-full bg-primary/30 py-36 flex items-center ">
      <OffCanvas
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        projectDetail={projectDetail}
      />
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 sm:mt-64">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">

            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>

          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] md:mb-28"
          >
            <WorkSlider handleDrawer={handleDrawer}/>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Work;
