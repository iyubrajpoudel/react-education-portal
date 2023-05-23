import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from './../components/footer/Footer';
import {useLocation } from "react-router-dom";

const Layout = ({ children }) => {
    const location = useLocation();

    // Restore the scroll value to default i.e (0,0) when route/location changes Since, page don't get refresh in react
    useEffect(() => {
    window.scrollTo(0,0);
    }
    , [location])

    return (
        <>
            <div className="layout" style={{ overflow: "hidden" }}>
                <header className='fixed w-full bg-white z-50'>
                    <Navbar />
                </header>
                <main className='pt-[6rem] min-h-[80vh]'>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Layout