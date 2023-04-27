import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/style.css";
import 'animate.css';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
