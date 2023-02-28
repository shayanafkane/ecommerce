import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"


// import required modules
import { Autoplay, Navigation } from "swiper";
function SliderTopHome() {
    return (
        <div className='mt-12 '>
            <div className="box-slider-top-home container mx-auto bg-slate-100 h-96 rounded-2xl">
                <Swiper autoplay={true} dir="rtl" navigation={true} modules={[Navigation , Autoplay]} className="mySwiper h-full w-full" >
                    <SwiperSlide >
                        <div className="h-full rounded-2xl">
                            <img className="rounded-2xl" src="https://api.lorem.space/image/watch?w=1366&h=400&23" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full rounded-2xl">
                            <img className="rounded-2xl" src="https://api.lorem.space/image/watch?w=1366&h=400&gg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full rounded-2xl">
                            <img className="rounded-2xl" src="https://api.lorem.space/image/watch?w=1366&h=400&gg2" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full rounded-2xl">
                            <img className="rounded-2xl" src="https://api.lorem.space/image/watch?w=1366&h=400&g5" alt="" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    )
}

export default SliderTopHome