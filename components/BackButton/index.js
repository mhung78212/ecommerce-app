import { useEffect, useState } from "react";

const BackButton = () => {
    const [backToTop, setBackToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    }, [backToTop]);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {backToTop && (
                <button className="back-to-top animate__animated animate__fadeIn" onClick={scrollUp}>
                    <i className="ri-arrow-up-s-line"></i>
                </button>
            )}
        </>
    );
};

export default BackButton;
