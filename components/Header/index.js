import Link from "next/link";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import { Logo } from "@/assets";
import { useEffect, useState } from "react";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 100) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        });
    }, []);
    return (
        <header
            className={
                navbar
                    ? "bg-white header-shadow animate__animated animate__slideInDown sticky p-0 top-0 left-0 z-10 transition-all"
                    : "absolute top-0 left-0 w-full z-50"
            }
        >
            <div className=" container relative px-8">
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
                    <div className="flex text-xl space-x-4">
                        <a href="#">
                            <i className="ri-search-line"></i>
                        </a>
                        <a href="#">
                            <i className="ri-user-line"></i>
                        </a>
                        <a href="#">
                            <i className="ri-heart-line"></i>
                        </a>
                        <a href="#">
                            <i className="ri-handbag-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
