'use client'

// data
import projectList from './projectList';
// Components
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination  } from 'swiper';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Styles
const desktopContainerStyle = "hidden md:block w-full xl:max-w-[65%] md:mb-8 z-30"
const mobileContainerStyle = "md:hidden w-full xl:max-w-[65%] md:mb-28 z-30"
const swiperStyle = 'h-[320px] xs:auto sm:h-[360px] md:h-[480px] lg:h-[580px] xl:h-[480px]'
const desktopSwiperSlideSt = 'grid md:grid-cols-2 md:grid-rows-2 gap-4 cursor-pointer px-16'
const mobileSwiperSlideSt = 'grid xs:grid-cols-1 xs:grid-rows-1 cursor-pointer px-8'


const WorkSlider = ({ handleDrawer }) => (
  <>
    {/* Desktop */}
    <motion.div
      variants={fadeIn('down', 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={desktopContainerStyle}
    >
      <Swiper
        navigation={true}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className={swiperStyle}
      >
        {projectList.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={desktopSwiperSlideSt}>
                {slide.projects.map((project, index) => (
                  <Card key={index} handleDrawer={handleDrawer} project={project} />
                ))}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </motion.div>

    {/* Mobile */}
    <motion.div
      variants={fadeIn('down', 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={mobileContainerStyle}
    >
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={swiperStyle}
      >
        {projectList.slides.map((slide, index) => {
          return (
            <div key={index}>
              {slide.projects.map( (project) => (
                <SwiperSlide key={project.link}>
                  <div className={mobileSwiperSlideSt}>
                    <Card handleDrawer={handleDrawer} project={project} />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          )
        })}
      </Swiper>
    </motion.div>
  </>
)


export default WorkSlider;
