// data
import projectList from './projectList';
// Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Card from './Card';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Styles
const mobileContainerStyle = "md:hidden w-screen xl:max-w-[65%] sm:mb-12 md:mb-28 z-30"
const swiperStyle = 'h-[350px] sm:h-[365px] md:h-[480px] lg:h-[580px] xl:h-[500px] xxl:h-[520px]'
const mobileSwiperSlideSt = 'grid xs:grid-cols-1 xs:grid-rows-1 cursor-pointer md:px-8'

const WorkSliderMobile = ({ handleDrawer }) => (
    <div className={mobileContainerStyle}>
        <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className={swiperStyle}
        >
            {projectList.slides.map((slide, index) => (
                <div key={index}>
                    {slide.projects.map((project) => (
                        <SwiperSlide key={project.link}>

                            {({ isActive }) => (
                                isActive ? (
                                    <motion.div
                                        variants={fadeIn('down', 0.2)}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className={mobileSwiperSlideSt}>
                                        <Card handleDrawer={handleDrawer} project={project} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        variants={fadeIn('down', 0.2)}
                                        initial="hidden"
                                        animate="show"
                                        exit={{ display: "none" }}
                                        className={mobileSwiperSlideSt}
                                    >
                                        <Card handleDrawer={handleDrawer} project={project} />
                                    </motion.div>
                                )
                            )}
                        </SwiperSlide>
                    ))}
                </div>
            ))}
        </Swiper>
    </div>
)

export default WorkSliderMobile