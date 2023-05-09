import { imageBrand } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Brand = () => {
    return (
        <div className="brand">
            <div className="brand-header">
                <div className="container">
                    <div className="flex items-center justify-center">
                        <div className="w-2/3 text-center">
                            <h1 className="text-primary text-[72px] font-medium">
                                Welcome To Store
                            </h1>
                            <p className="text-[24px] font-normal">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Link
                                href="./shop"
                                className="btn btn-primary btn-large mt-24"
                            >
                                purchase now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary py-[50px]">
                <div className="container">
                    <Swiper
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={2}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                            1080: {
                                slidesPerView: 5,
                            },
                        }}
                        modules={[Pagination]}
                        className="brandSwiper"
                    >
                        {imageBrand.map((brand, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center">
                                    <Image
                                        className="opacity-50 transition-all hover:opacity-100 "
                                        src={brand}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Brand;
