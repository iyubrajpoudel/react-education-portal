import React from 'react'
import Logo from "./assets/images/logo.svg"

const Navbar = () => {
    return (
        <>
            <div className="navbar-wrapper shadow-md p-4">
                <div className="container flex gap-6 items-center max-w-[1280px] mx-auto">
                    <div className="logo"><img className="max-w-[200px]" src={Logo} alt="" /></div>
                    <div className="nav-menu flex-grow">
                        <ul className="menu-list flex justify-end gap-10 text-xl font-semibold text-purple-800">
                            <li className="menu hover:text-yellow-400 transition-all ease-in-out duration-300"><a href="/">Home</a></li>
                            <li className="menu hover:text-yellow-400 transition-all ease-in-out duration-300"><a href="#">About</a></li>
                            <li className="menu hover:text-yellow-400 transition-all ease-in-out duration-300"><a href="#">Blogs</a></li>
                            <li className="menu hover:text-yellow-400 transition-all ease-in-out duration-300"><a href="#">Courses</a></li>
                            <li className="menu hover:text-yellow-400 transition-all ease-in-out duration-300"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar