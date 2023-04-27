import { imageSlider } from "@/assets";
import SliderItem from "./SliderItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const Slider = () => {
    return (
        <Swiper
            loop={true}
            slidesPerView={1}
            className="mySwiper"
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
        >
            {imageSlider.map((image, index) => (
                <SwiperSlide key={index}>
                    <SliderItem image={image} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
