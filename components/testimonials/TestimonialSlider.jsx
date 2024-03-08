// Data
import testimonialData from './testimonialData';
// Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Reviewer from './Reviewer';
import Quote from './Quote';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Styles
const swiperStyle = 'h-auto sm:h-[350px] sm:mb-0'
const swiperSlideStyle = 'flex flex-col items-center md:flex-row gap-x-8 h-full xl:h-auto px-16 '

const TestimonialSlider = () => (
  <Swiper
    navigation={true}
    pagination={{ clickable: true }}
    modules={[Navigation, Pagination]}
    className={swiperStyle}
  >
    {testimonialData.map((person, index) => (
      <SwiperSlide key={index}>

        {({ isActive }) => (
          isActive ? (
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={swiperSlideStyle}>
                <Reviewer person={person} />
                <Quote person={person} />
            </motion.div>
          ) : (
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit={{ display: "none" }}
              className={swiperSlideStyle}
            >
              <Reviewer person={person} />
              <Quote person={person} />
            </motion.div>
          )
        )}
      </SwiperSlide>
    ))}
  </Swiper>
)
export default TestimonialSlider;
