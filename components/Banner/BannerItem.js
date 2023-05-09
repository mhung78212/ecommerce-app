import Image from "next/image";
import Link from "next/link";

const BannerItem = ({ label, image }) => {
    return (
        <div className="relative overflow-hidden banner ">
            <Image
                src={image}
                alt=""
                priority={true}
                className="w-full h-full"
            />
            <div className="absolute top-0 left-0 p-10 w-full h-full">
                <h3 className="banner-title">{label}</h3>
                <span className="banner-discount ">30% off</span>
                <Link href="/shop" className="btn btn-primary btn-medium mt-5">
                    shop now
                </Link>
            </div>
        </div>
    );
};

export default BannerItem;
