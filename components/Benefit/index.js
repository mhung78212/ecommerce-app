import { Icon1, Icon2, Icon3 } from "@/assets";
import Image from "next/image";

const Benefit = () => {
    const data = [
        {
            image: Icon1,
            label: "Free Shipping",
            description:
                "Free shipping, free returns, and more at 1000+ top retailers!",
        },
        {
            image: Icon2,
            label: "Safe Payment",
            description:
                "Get 10% cash back, free shipping and more at 1000+ top retailers!",
        },
        {
            image: Icon3,
            label: "Online Support",
            description:
                "Get 10% cash back, free returns and more at 1000+ top retailers!",
        },
    ];
    return (
        <section className="container py-24">
            <div className="grid grid-cols-3 gap-8">
                {data.map((item) => (
                    <div
                        key={item.label}
                        className="flex flex-col items-center border border-primary p-8 py-10 transition ease-linear"
                    >
                        <Image src={item.image} alt="" />
                        <h3 className="text-[30px] font-medium mt-5">
                            {item.label}
                        </h3>
                        <p className="text-16 text-[#6a6a69] leading-[1.8] text-center">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefit;
