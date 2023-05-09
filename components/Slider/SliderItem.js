import Image from "next/image";
import Link from "next/link";

function SliderItem({ image }) {
    return (
        <div className="w-full bg-secondary relative overflow-hidden">
            <div className="slider-shape"></div>
            <div className="container my-40">
                <div className="relative w-full h-full flex items-center flex-wrap">
                    <div className="flex-auto w-1/2">
                        <h2 className="text-7xl font-bold leading-[1.15] mb-0 animate__animated animate__fadeInUp">
                            New Stylish <br />
                            Decore Furniture
                        </h2>
                        <p className="text-xl font-normal my-5 animate__animated animate__fadeInUp animate__delay-1s">
                            Unique Furniture Style Design for Your Family
                        </p>
                        <Link
                            href="/shop"
                            className="btn btn-primary btn-large animate__animated animate__fadeInUp animate__delay-1s"
                        >
                            purchase now
                        </Link>
                    </div>
                    <div className="flex-auto w-1/2">
                        <Image
                            src={image}
                            alt="SliderItem-1"
                            priority={true}
                            className="animate__animated animate__slideInRight animate__delay-2s"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderItem;
