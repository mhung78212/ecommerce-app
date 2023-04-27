import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Ecommerce App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
