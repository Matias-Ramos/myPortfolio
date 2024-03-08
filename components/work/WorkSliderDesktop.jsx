// data
import projectList from './projectList';
// Components
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// Styles
const desktopContainerStyle = "hidden md:block w-full xl:max-w-[75%] md:mb-8 z-30"
const swiperStyle = 'h-[350px] sm:h-[365px] md:h-[480px] lg:h-[580px] xl:h-[500px] xxl:h-[520px]'
const desktopSwiperSlideSt = 'grid md:grid-cols-2 md:grid-rows-2 gap-4 cursor-pointer px-16 '

const WorkSliderDesktop = ({ handleDrawer }) => (
    <div className={desktopContainerStyle}>
        <Swiper
            navigation={true}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className={swiperStyle}
        >
            {projectList.slides.map((slide, index) => (
                    <SwiperSlide key={index}>

                        {({ isActive }) => (
                            isActive ? (
                                <motion.div
                                    variants={fadeIn('down', 0.2)}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className={desktopSwiperSlideSt}>
                                    {slide.projects.map((project) => (
                                        <Card key={project.link} handleDrawer={handleDrawer} project={project} />
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    variants={fadeIn('down', 0.2)}
                                    initial="hidden"
                                    animate="show"
                                    exit={{ display: "none" }}
                                    className={desktopSwiperSlideSt}
                                >
                                    {slide.projects.map((project) => (
                                        <Card key={project.link} handleDrawer={handleDrawer} project={project} />
                                    ))}
                                </motion.div>
                            )
                        )}
                    </SwiperSlide>
                )
            )}
        </Swiper>
    </div>
)

export default WorkSliderDesktop