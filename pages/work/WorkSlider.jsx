'use client'

// data
import projectList from './projectList';
// Components
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination } from 'swiper';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Styles
const containerStyle = "w-full xl:max-w-[65%] md:mb-28"
const swiperStyle = 'h-[280px] sm:h-[480px]'
const swiperSlideSt = 'grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer '


const WorkSlider = ({ handleDrawer }) => (
  <motion.div
    variants={fadeIn('down', 0.6)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className={containerStyle}
  >
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className={swiperStyle}
    >
      {projectList.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={swiperSlideSt}>
              {slide.projects.map((project, index) => (
                <Card key={index} handleDrawer={handleDrawer} project={project} />
              ))}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  </motion.div>
)


export default WorkSlider;
