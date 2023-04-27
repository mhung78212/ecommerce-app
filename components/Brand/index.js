import { imageBrand } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Brand = () => {
    return (
        <>
            <div className="header-brand">
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
                                className="btn btn-primary mt-10"
                            >
                                purchase now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary py-[50px]">
                <div className="container">
                    <div className="ml-24">
                        <Swiper
                            slidesPerView={5}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[Pagination]}
                            className="brandSwiper"
                        >
                            {imageBrand.map((brand, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        className="opacity-50 transition-all hover:opacity-100 "
                                        src={brand}
                                        alt=""
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Brand;
