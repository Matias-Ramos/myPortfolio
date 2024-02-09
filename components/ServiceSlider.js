// Components
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper';
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Define your dream website',
    description: "Share your unique vision and I'll help you transform your ideas into a clear, actionable plan. We'll discuss your goals, target audience, and functionality needs to lay the foundation for a successful website.",
  },
  {
    icon: <RxPencil2 />,
    title: 'Wireframing for Clarity',
    description: "Visualize your website before a single line of code is written. We'll collaborate on a detailed wireframe outlining the information architecture, user flow, and key features. This ensures we're on the same page and will improve the development timings.",
  },
  {
    icon: <RxDesktop />,
    title: 'Development & Design',
    description: "Get ready to be amazed! I'll translate your vision into a pixel-perfect reality. Expect cutting-edge development, beautiful branding integration, and user-friendly navigation. You'll receive a website that not only looks stunning but also performs flawlessly on all devices.",
  },
];

const ServiceSlider = () => {
  return(
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[ FreeMode, Pagination ]}
      className='h-[375px] sm:h-[440px]'
    >
      {serviceData.map((item, index) => {
        return(
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-[325px] sm:h-[390px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-150'>
              
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>
                {item.icon}
              </div>

              {/* title & descr */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ServiceSlider;
