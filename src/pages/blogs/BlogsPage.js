import React from 'react'
import Layout from '../../layouts/Layout'
import bannerImage from './assets/images/back1.jpg'
import Banner from './../../components/banner/Banner';
import Blog from './../../components/blog/Blog';

import featuredImg from './assets/images/b1.jpg'

const BlogsPage = () => {
    return (
        <Layout>
            <div div className='space-y-20 pb-20' >
                <section>
                    <Banner image={bannerImage} text={"Blogs"} />
                </section>
                <section>
                    <div className="container max-w-[1280px] mx-auto row flex flex-col-reverse md:flex-row justify-between gap-4 lg-gap-8">
                        <div className="col blogs w-full md:w-[60%] lg:w-[50%] flex flex-col gap-[4rem]">
                            <div className="row p-2">
                                <Blog title={`Learn Web Development In The Easiest Way`} image={featuredImg} excerpt={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, praesentium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, praesentium.`} link={`/`} />
                            </div>
                            <div className="row p-2">
                                <Blog title={`Learn Web Development In The Easiest Way`} image={featuredImg} excerpt={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, praesentium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, praesentium.`} link={`/`} />
                            </div>
                        </div>
                        <div className="col categories w-full md:w-[30%] flex flex-col">
                            <div className="row p-4  border border-b-4">
                                <h2 className='text-xl font-bold'>Categories</h2>
                            </div>
                            <div className='row flex flex-row flex-wrap md:flex-col'>
                                <div className="row p-4 border border-b-4">
                                    <p className='text-lg text-gray-700 hover:font-semibold cursor-pointer'>Web Development</p>
                                    {/* <a className='text-lg text-gray-700'>Web Development</a> */}
                                    {/* <Link className='text-lg text-gray-700'>Web Development</Link> */}
                                </div>
                                <div className="row p-4 border border-b-4">
                                    <p className='text-lg text-gray-700 hover:font-semibold cursor-pointer'>Web Design</p>
                                </div>
                                <div className="row p-4 border border-b-4">
                                    <p className='text-lg text-gray-700 hover:font-semibold cursor-pointer'>MERN Stack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default BlogsPage


