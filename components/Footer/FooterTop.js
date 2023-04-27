import { Icon4, Logo, Payment } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

const FooterTop = () => {
    return (
        <div className="bg-secondary pt-2 pb-8">
            <div className="container mt-8">
                <div className="flex">
                    <div className="flex-auto w-2/12">
                        <Link href="/">
                            <Image src={Logo} alt="Logo" priority={true} />
                        </Link>
                    </div>
                    <div className="flex-auto w-5/12">
                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <div className="h-[46px] w-[39px]">
                                    <Image src={Icon4} alt="icon" />
                                </div>
                                <div className="pl-4">
                                    <h6 className="title">Call Us:</h6>
                                    <p className="title">00 123 456 789</p>
                                </div>
                            </div>

                            <Image src={Payment} alt="payment" />
                        </div>
                    </div>
                    <div className="flex-auto w-5/12">
                        <div className="flex items-center justify-end">
                            <h6 className="title mr-4">Subscribe Now :</h6>
                            <div className="max-w-[276px] w-full relative">
                                <form action="">
                                    <input
                                        className="footer-top-input"
                                        type="text"
                                        placeholder="Your Mail"
                                    />
                                    <button className="btn-smail btn-primary">
                                        <i className="ri-send-plane-fill"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
