// data
import { serviceData } from './serviceData';
// Components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper';
// animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Card from './Card';
// Styles
const sliderStyle = "w-full xl:max-w-[60%] lg:pb-0"
const swiperStyle = 'xs:h-auto h-[375px] sm:h-[440px]';

const Slider = () => (
  <motion.div
    variants={fadeIn('down', 0.6)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className={sliderStyle}
  >
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className={swiperStyle}
    >
      {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        )
      )}
    </Swiper>
  </motion.div>
)

export default Slider;
