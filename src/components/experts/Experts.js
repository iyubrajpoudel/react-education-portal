import React from 'react'

import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"

// images
import dp from "./assets/images/pp.jpg"


const ExpertCard = ({ image, name, role, fb, insta, linkedin }) => {
    return (
        <div className='card px-4 py-8 flex flex-col gap-4 justify-center items-center bg-yellow-50 rounded-md shadow w-full md:w-[45%] lg:w-[32%]'>
            <div className="image row">
                <img src={image} alt="" className='rounded-full w-[12rem]' />
            </div>
            <div className="row text-center">
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-lg'>{role}</p>
            </div>
            <div className="row social-links flex gap-4">
                <div className="fb text-xl border text-blue-600 border-blue-800 p-2 hover:text-white hover:bg-blue-600 transition-all duration-200 cursor-pointer"><a href={`https://www.facebook.com/${fb}`} target='_blank'><FaFacebookF /></a></div>
                <div className="insta text-xl border text-red-500 border-blue-800 p-2 hover:text-white hover:bg-red-500 transition-all duration-200 cursor-pointer"><a href={`https://www.instagram.com/${insta}`} target='_blank'><FaInstagram /></a></div>
                <div className="linkedin text-xl border text-blue-800 border-blue-800 p-2 hover:text-white hover:bg-blue-800 transition-all duration-200 cursor-pointer"><a href={`https://www.linkedin.com/in/${linkedin}`} target='_blank'><FaLinkedin /></a></div>
            </div>
        </div>
    )
}

const Experts = () => {
    return (
        <>
            <div className="experts-wrapper">
                <div className="container max-w-[1280px] mx-auto">
                    <div className="row text-center">
                        <h2 className='font-bold text-2xl md:text-3xl'>Community Experts</h2>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="row cards-row py-[4rem] md:px-[2rem] flex gap-6 flex-col justify-center items-center md:flex-row md:justify-start flex-wrap">
                        <ExpertCard image={dp} name={`Yubraj Poudel`} role={`Web Developer`} fb={`iyubrajpoudel`} insta={`iyubrajpoudel`} linkedin={`iyubrajpoudel`} />
                        <ExpertCard image={dp} name={`Yubraj Poudel`} role={`Web Developer`} fb={`iyubrajpoudel`} insta={`iyubrajpoudel`} linkedin={`iyubrajpoudel`} />
                        <ExpertCard image={dp} name={`Yubraj Poudel`} role={`Web Developer`} fb={`iyubrajpoudel`} insta={`iyubrajpoudel`} linkedin={`iyubrajpoudel`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experts