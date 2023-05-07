import React from 'react'
import image from './assets/images/a.png'
import icon1 from './assets/images/fe1.png'
import icon2 from './assets/images/fe2.png'

const About = () => {
    return (
        <div className='about-wrapper p-2'>
            <div className="container max-w-[1280px] mx-auto row flex flex-col md:flex-row gap-6 ">
                <div className='col flex md:items-center'>
                    <div className="row">
                        <img src={image} alt="" className='lg:w-[80rem]' />
                    </div>
                </div>
                <div className='col flex flex-col justify-center align-center gap-6'>
                    <div className="row">
                        <h3 className='text-xl lg:text-3xl font-bold'>Welcome to TechEduca, Enhance your skills with best Online Courses</h3>
                    </div>
                    <div className="row">
                        <p className='text-gray-600 text-justify md:text-left'>You can start and finish one of these popular courses in under a day for free! Check list below.. Take the course for free</p>
                    </div>
                    <div className="row flex flex-col gap-4">
                        <div className="row flex gap-6">
                            <div className="col">
                                <div className="row logo">
                                    <img src={icon1} alt="" className='w-[10rem]' />
                                </div>
                            </div>
                            <div className="col flex flex-col">
                                <div className="row">
                                    <h3 className="text-xl font-bold">
                                        400+ Courses
                                    </h3>
                                </div>
                                <div className="row">
                                    <p className='text-gray-600 text-justify md:text-left'>You can start and finish one of these popular courses in under our site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quae?</p>
                                </div>
                            </div>
                        </div>
                        <div className="row flex gap-6">
                            <div className="col">
                                <div className="row logo">
                                    <img src={icon2} alt="" className='w-[10rem]' />
                                </div>
                            </div>
                            <div className="col flex flex-col">
                                <div className="row">
                                    <h3 className="text-xl font-bold">
                                        Lifetime Access
                                    </h3>
                                </div>
                                <div className="row">
                                    <p className='text-gray-600 text-justify md:text-left'>You can start and finish one of these popular courses in under our site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About