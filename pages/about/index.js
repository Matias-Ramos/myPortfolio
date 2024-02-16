// hooks
import { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  FaGolang,
} from "react-icons/fa6";

import {
  SiNextdotjs,
  SiTypescript,
  SiMysql ,
} from "react-icons/si";

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// animation
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants'

// counter
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiTypescript />,
          <FaReact />,
          <SiNextdotjs />,
          <FaGolang />,
          <SiMysql />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Freelance developer',
        stage: '2022 - 2024',
      },
      {
        title: 'Network Analyst - Accenture',
        stage: '2019 - 2021',
      },
      {
        title: 'Asset mgmt. & Local support - Accenture',
        stage: '2017 - 2019',
      },
    ],
  },
];



const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left z-20">
      <Circles />
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="md:container xs:w-5/6 mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* text */}
        <div className="flex flex-1 flex-col justify-start h-full relative">
          <motion.h2 
            variants={fadeIn('right', 0.2)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
              Design that takes your business to the <span className="text-accent">next level</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px]  mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-lg"
          >
              In 2022, I launched my freelance development career, partnering with passionate entrepreneurs across <span className="font-semibold">diverse industries</span>, including but not limited to a Colombian fitness studios, a real estate agency, and a car dealership from Buenos Aires.
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 ">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} delay={1.5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} delay={1.5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} delay={1.5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.5)} 
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] xs:pb-28 sm:pb-28 lg:pb-28 lg:align-top h-full"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 relative z-20">
            {aboutData.map((item, itemIndex) => {
              return(
                <div
                  key={itemIndex}
                  className={`${index===itemIndex && 'text-accent after:w-[100%] after:bg-accenter after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={()=> setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start text-lg">
            {aboutData[index].info.map((item, itemIndex) => {
              return(
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 ">
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex)=>{
                      return(
                        <div className="text-2xl text-white" key={itemIndex}>{icon}</div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
