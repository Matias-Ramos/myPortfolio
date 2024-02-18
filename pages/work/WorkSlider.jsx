'use client'

// data
import projectList from './projectList';
// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination } from 'swiper';
// Components
import Card from './Card';
// Styles
const swiperStyle = 'h-[280px] sm:h-[480px]'
const swiperSlideSt = 'grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer '


const WorkSlider = ({ handleDrawer }) => (
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
)


export default WorkSlider;
