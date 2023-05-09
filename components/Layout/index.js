import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import BackButton from "../BackButton";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Ecommerce App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            <BackButton />
            <Footer />
        </>
    );
};

export default Layout;
