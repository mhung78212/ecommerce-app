const FooterSetion = () => {
    const footerSetionDatas = [
        {
            label: "Customer Service",
            links: [
                "Payment Methods",
                "Money-back guarantee!",
                "Returns-Shipping",
                "Returns-Shipping",
                "Terms and conditions",
                "Privacy Policy",
            ],
        },
        {
            label: "Information",
            links: [
                "About Furbar",
                "How to Shop",
                "FAQ",
                "Contact us",
                "Log in",
            ],
        },
        {
            label: "My Account",
            links: [
                "Sign In",
                "View Cart",
                "My Wishlist",
                "Track My Order",
                "Help",
            ],
        },
        {
            label: "Our Stores",
            links: [
                "New York",
                "London",
                "Los Angeles",
                "Hai Phong",
                "Chicago",
            ],
        },
    ];
    return (
        <div className="bg-[#f1eee5] pt-4 pb-12 ">
            <div className="container flex">
                {footerSetionDatas.map((data) => (
                    <div
                        key={data.label}
                        className="flex-auto w-2/12 first:w-3/12"
                    >
                        <h4 className="footer-title pb-4">{data.label}</h4>
                        <ul>
                            {data?.links.map((link, index) => (
                                <li key={index} className="mt-2">
                                    <a href="#" className="footer-section-link">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="flex-auto w-3/12">
                    <h4 className="footer-title pb-4">About Us</h4>
                    <p className="footer-section-link">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus cum porro veritatis aut deleniti, odit vero
                        accusantium totam commodi sapiente quo sequi iure
                        doloribus sit enim aliquam dolorum cumque eius.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterSetion;
