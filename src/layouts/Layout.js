import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from './../components/footer/Footer';

const Layout = ({ children }) => {
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