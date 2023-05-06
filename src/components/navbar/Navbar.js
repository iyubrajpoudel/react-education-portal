import React, { useState } from 'react'
import Logo from "./assets/images/logo.svg"

import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleHamburger = () => {
        setShowMobileMenu(true);
    }

    const handleCross = () => {
        setShowMobileMenu(false);
    }

    return (
        <>
            <div className={`navbar-wrapper shadow-md p-4 relative`}>
                <div className="container flex gap-6 items-center max-w-[1280px] mx-auto">
                    <div className="logo"><img className="max-w-[200px]" src={Logo} alt="" /></div>
                    <div className="nav-menu flex-grow">
                        <div className="row flex justify-end">
                            <div className='hamburger text-2xl lg:hidden' onClick={handleHamburger}>
                                <GiHamburgerMenu />
                            </div>
                            <div className={`absolute lg:static flex flex-col items-start lg:flex-row ${showMobileMenu ? "right-0" : "-right-[100%]"} top-0 bg-purple-800 bg-opacity-40 backdrop-blur-sm lg:backdrop-blur-none text-white h-screen lg:h-auto p-8 lg:p-0 lg:bg-transparent transition-all duration-500 ease-in-out`}>
                                <div className='close text-2xl lg:hidden mb-6' onClick={handleCross} >
                                    <FaTimes />
                                </div>
                                <div>
                                    <ul className="menu-list text-xl font-semibold text-white lg:text-purple-800 flex flex-col lg:flex-row gap-10 ">
                                        <li className="menu hover:text-yellow-400 transition-all ease-in-out duration-300"><a href="/">Home</a></li>
                                        <li className="menu hover:text-yellow-400 transition-all ease-in-out duration-300"><a href="#">About</a></li>
                                        <li className="menu hover:text-yellow-400 transition-all ease-in-out duration-300"><a href="#">Blogs</a></li>
                                        <li className="menu hover:text-yellow-400 transition-all ease-in-out duration-300"><a href="#">Courses</a></li>
                                        <li className="menu hover:text-yellow-400 transition-all ease-in-out duration-300"><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar