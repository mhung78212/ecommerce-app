import Layout from "@/components/Layout";
import { ProductProvider } from "@/context/ProductContext";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import "@/styles/style.css";
import "animate.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            {/* <ProductProvider> */}
            <Layout>
                <Component {...pageProps} />
            </Layout>
            {/* </ProductProvider> */}
        </Provider>
    );
}
