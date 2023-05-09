import Link from "next/link";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import { Logo } from "@/assets";
import { useEffect, useState } from "react";
import DropDownCart from "../Cart/DropDownCart";

const DesktopHeader = () => {
    const [navbar, setNavbar] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 100) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        });
    }, []);
    const handleShowCart = (e) => {
        e.preventDefault();
        setShowDropDown(!showDropDown);
    };
    return (
        <header
            className={
                navbar
                    ? "bg-white header-shadow animate__animated animate__slideInDown sticky p-0 top-0 left-0 z-10 transition-all"
                    : "absolute top-0 left-0 w-full z-50"
            }
        >
            <div className=" container relative">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <Image src={Logo} alt="Logo" priority={true} />
                    </Link>
                    {/* Menu */}
                    <div>
                        <ul className="flex nav-list">
                            <li>
                                <Link href="/" className="nav-list-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop" className="nav-list-link">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="nav-list-link">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="nav-list-link">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="nav-list-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Icon */}
                    <div className="flex text-25 space-x-5">
                        <a href="#">
                            <i className="ri-search-line"></i>
                        </a>
                        <a href="#">
                            <i className="ri-user-line"></i>
                        </a>
                        <a href="#">
                            <i className="ri-heart-line"></i>
                        </a>
                        <button
                            href=""
                            className="relative"
                            onClick={handleShowCart}
                        >
                            <i className="ri-shopping-bag-line"></i>
                            <span className="fly-item -top-[5px] -right-[10px]">
                                3
                            </span>
                           <DropDownCart showDropDown={showDropDown}/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DesktopHeader;
