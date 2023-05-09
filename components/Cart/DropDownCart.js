import { Product04 } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const DropDownCart = ({ showDropDown }) => {
    return (
        <div className={`dropdown-cart ${showDropDown ? "show" : ""}`}>
            <div className="max-h-[320px] overflow-y-auto" id="cart-scroll">
                <ul className="px-7">
                    <li className="py-7 border-b border-black overflow-hidden">
                        <div className="flex ">
                            <div className="relative">
                                <Image
                                    src={Product04}
                                    alt=""
                                    className="w-[85px]"
                                />
                                <span className="top-1 left-1 fly-item ">
                                    1
                                </span>
                            </div>
                            <div className="flex-1 pl-2 pr-5 overflow-hidden relative text-left">
                                <h6 className="capitalize mt-1 text-16 text-[#4c4c4c] font-semibold whitespace-nowrap overflow-hidden leading-20 text-ellipsis">
                                    High Quality Vase Bottle
                                </h6>
                                <span className="my-1 text-16 text-primary font-normal">
                                    $19.99
                                </span>
                                <p className=" text-16 text-[#a7a7a7] font-normal">
                                    Color: <span>White</span>
                                </p>
                            </div>
                            <div className="text-black hover:text-primary">
                                <i className="ri-close-fill"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="overflow-hidden p-5">
                <div className="space-y-2 cursor-default">
                    <div className="overflow-hidden leading-[25px] flex items-center justify-between text-16 text-[#a7a7a7] uppercase font-normal">
                        <span>Subtotal :</span>
                        <span>$42.70</span>
                    </div>
                    <div className="overflow-hidden leading-[25px] flex items-center justify-between text-16 text-[#a7a7a7] uppercase font-normal">
                        <span>SHIPPING :</span>
                        <span>$42.70</span>
                    </div>
                    <div className="overflow-hidden leading-[25px] flex items-center justify-between text-16 text-[#a7a7a7] uppercase font-normal">
                        <span>TAXES :</span>
                        <span>$42.70</span>
                    </div>
                </div>
                <div className="flex justify-between text-black uppercase text-16 mt-2">
                    <span>TOTAL :</span>
                    <span>$42.70</span>
                </div>
            </div>
            <div className="p-5 pt-0 text-center">
                <Link
                    href="/checkout"
                    className="btn btn-gray w-full text-16 py-2"
                >
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default DropDownCart;
