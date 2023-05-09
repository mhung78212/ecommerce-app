import { imageBanner } from "@/assets";
import BannerItem from "./BannerItem";

const Banner = () => {
    const banners = [
        { label: "New Ruben Teak Sideboard", image: imageBanner[0] },
        { label: "New Reversible Sleeper Sofa", image: imageBanner[1] },
        { label: "New Lamp Light Collection", image: imageBanner[2] },
    ];
    return (
        <div className="pt-24">
            <div className="container">
                <div className="grid grid-cols-3 gap-10 mx-4">
                    {banners.map((banner) => (
                        <BannerItem
                            key={banner.label}
                            label={banner.label}
                            image={banner.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
