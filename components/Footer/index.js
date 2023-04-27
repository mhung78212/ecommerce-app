import FooterSetion from "./FooterSetion";
import FooterTop from "./FooterTop";

const Footer = () => {
    return (
        <div className="w-full ">
            <FooterTop />
            <FooterSetion />
            <div className="bg-white">
                <div className="container">
                    <div className="text-center p-3">
                        <p>© Coryright 2023 Furbar.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
