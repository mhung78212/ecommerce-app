import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Slider from "@/components/Slider";
import Benefit from "@/components/Benefit";
import HomeProduct from "@/components/Product/HomeProduct";

export default function Home() {
    return (
        <>
            <Slider />
            <Banner />
            <HomeProduct />
            <Brand />
            <Benefit />
        </>
    );
}
