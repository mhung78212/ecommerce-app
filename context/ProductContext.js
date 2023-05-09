import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => setProductData(res.data));
    }, []);
    return <ProductContext.Provider value={{productData}}>{children}</ProductContext.Provider>;
};
