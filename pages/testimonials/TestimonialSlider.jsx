// Data
import testimonialData from './testimonialData';
// Components
import Reviewer from './Reviewer';
import Quote from './Quote';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper';
// Styles
const swiperStyle = 'xs:h-auto sm:h-[400px] xs:mb-24 sm:mb-0'
const swiperSlideStyle = 'flex flex-col items-center md:flex-row gap-x-8 h-full px-16 '

const TestimonialSlider = () => (
  <Swiper
    navigation={true}
    pagination={{ clickable: true }}
    modules={[Navigation, Pagination]}
    className={swiperStyle}
  >
    {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className={swiperSlideStyle}>

            <Reviewer person={person} />
            <Quote person={person} />

          </div>
        </SwiperSlide>
      )
    )}
  </Swiper>
)
export default TestimonialSlider;
