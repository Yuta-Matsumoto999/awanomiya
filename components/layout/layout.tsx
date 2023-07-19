import Head from "next/head";
import { ReactNode } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

interface Props {
    children: ReactNode;
    title: string
}

export default function Layout({children, title}: Props) {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>
            <Footer />
        </div>
    )
}