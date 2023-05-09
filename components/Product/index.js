/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";

const Product = ({ id, title, image, price }) => {
    const handleProduct = async (productId) => {
        const response = await axios.get(
            `https://fakestoreapi.com/products/${productId}`,
        );
        console.log(response);
    };
    return (
        <div className="product">
            <Link href={"#"} className="product-image">
                <img src={image} alt="" />
            </Link>
            <div className="product-content">
                <h4 className="product-title">
                    <Link href={"/shop"}>{title}</Link>
                </h4>
                <span className="product-price">{price}</span>
            </div>
            <ul className="product-meta">
                <li>
                    <Link href={"#"}>
                        <i className="ri-heart-line"></i>
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        <i className="ri-search-line"></i>
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        <i className="ri-shopping-bag-line"></i>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Product;
