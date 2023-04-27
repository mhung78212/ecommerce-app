import Image from "next/image";
import Link from "next/link";

const BannerItem = ({ label, image }) => {
    return (
        <div className="relative overflow-hidden banner-css ">
            <Image src={image} alt="" priority={true} />
            <div className="absolute top-0 left-0 p-10 w-full h-full">
                <h3 className="title-banner">{label}</h3>
                <span className="discount">30% off</span>
                <Link href="/shop" className="btn btn-primary btn-medium">
                    shop now
                </Link>
            </div>
        </div>
    );
};

export default BannerItem;
