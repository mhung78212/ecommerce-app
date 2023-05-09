/* eslint-disable @next/next/no-img-element */
import { Banner4 } from "@/assets";
import { fetchProducts } from "@/redux/ProductSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from ".";

const HomeProduct = () => {
    const products = useSelector((state) => state.product.products.slice(0, 5));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className="py-10">
            <div className="container">
                <div className="pt-0.5 border-b ">
                    <h3 className="text-3 font-bold"># New Products</h3>
                </div>
                <div className="pt-4">
                    <div className="flex items-center ">
                        {products.map((product) => (
                            <Product
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;
