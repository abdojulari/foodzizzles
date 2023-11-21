import React,  { ReactNode } from 'react';
import Banner from "../components/banner/banner";
import Navbar from "../components/nav/navbar";

interface LayoutProps {
    children: ReactNode;
    showBanner?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showBanner = true }) => {
    return (
        <section className="flex flex-col">
            <Navbar />
            { showBanner &&  <Banner /> }
            { children }
        </section >
    )
}

export default Layout