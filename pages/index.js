import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Slider from "@/components/Slider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function Home() {
    return (
        <>
            <Slider />
            <Banner />
            <div className="pt-[100px]"></div>
            <Brand />
        </>
    );
}
