import React,  { ReactNode } from 'react';
import { Banner }  from "../components";
import { Navbar } from "../components";
import { Footer } from '../components';

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
            <Footer />
        </section >
    )
}

export default Layout