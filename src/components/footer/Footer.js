import React from 'react'

import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"


const Footer = () => {
    return (
        <>
            <div className="wrapper bg-[#101c32] px-2 pt-[6rem] pb-[2rem]">
                <div className="container max-w-[1280px] mx-auto text-white ">
                    <div className="row flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-8 text-center md:text-left flex-wrap">
                        <div className="col space-y-8">
                            <div className="row"><h2 className='font-bold text-2xl'>Top Products</h2></div>
                            <div className="row">
                                <ul className='links text-lg flex flex-col gap-4 text-gray-400'>
                                    <li><a href="">Manage Reputation</a></li>
                                    <li><a href="">Power tools</a></li>
                                    <li><a href="">Managed Website</a></li>
                                    <li><a href="">Marketing Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col space-y-8">
                            <div className="row"><h2 className='font-bold text-2xl'>Quick Links</h2></div>
                            <div className="row">
                                <ul className='links text-lg flex flex-col gap-4 text-gray-400'>
                                    <li><a href="">Jobs</a></li>
                                    <li><a href="">Brand Assets</a></li>
                                    <li><a href="">Investor Relations</a></li>
                                    <li><a href="">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col space-y-8">
                            <div className="row"><h2 className='font-bold text-2xl'>Features</h2></div>
                            <div className="row">
                                <ul className='links text-lg flex flex-col gap-4 text-gray-400'>
                                    <li><a href="">Manage Reputation</a></li>
                                    <li><a href="">Managed Website</a></li>
                                    <li><a href="">Investor Relations</a></li>
                                    <li><a href="">Marketing Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col space-y-8">
                            <div className="row"><h2 className='font-bold text-2xl'>Resources</h2></div>
                            <div className="row">
                                <ul className='links text-lg flex flex-col gap-4 text-gray-400'>
                                    <li><a href="">Guides</a></li>
                                    <li><a href="">Research</a></li>
                                    <li><a href="">Experts</a></li>
                                    <li><a href="">Marketing Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col space-y-8 grow">
                            <div className="row"><h2 className='font-bold text-2xl'>Newsletter</h2></div>
                            <div className="row"><p>You can trust us, we only send promo offers.</p></div>
                            <div className="row">
                                <form action="">
                                    <div className="row flex">
                                        <div className='grow'>
                                            <input type="email" id='emailInput' name='email' className='bg-yellow-50 outline-none text-black px-4 py-2 text-lg w-full' placeholder='Your Email' />
                                        </div>
                                        <div>
                                            <button type="submit" id='subscribeBtn' className='px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold text-black uppercase'>Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row flex flex-col items-center md:flex-row md:justify-between gap-4 mt-[6rem] p-2">
                        <div>
                            <p className="text-lg">Copyright © 2021 All rights reserved.</p>
                        </div>
                        <div className="row social-links flex gap-4">
                            <div className="fb text-xl bg-gray-200 text-blue-600 p-2 hover:text-white hover:bg-blue-600 transition-all duration-200 cursor-pointer"><a href={`https://www.facebook.com/`} target='_blank'><FaFacebookF /></a></div>
                            <div className="insta text-xl bg-gray-200 text-red-500 p-2 hover:text-white hover:bg-red-500 transition-all duration-200 cursor-pointer"><a href={`https://www.instagram.com/`} target='_blank'><FaInstagram /></a></div>
                            <div className="linkedin text-xl bg-gray-200 text-blue-800 p-2 hover:text-white hover:bg-blue-800 transition-all duration-200 cursor-pointer"><a href={`https://www.linkedin.com/in/`} target='_blank'><FaLinkedin /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer