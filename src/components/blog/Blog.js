import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({ image, title, excerpt, link }) => {
    return (
        <div className="wrapper">
            <div className="container row flex flex-col gap-4">
                <div className="row">
                    <img src={image} alt="featured-image" className='featured-image rounded-3xl' />
                </div>
                <div className="row">
                    <h2 className="blog-title text-xl font-bold">{title}</h2>
                </div>
                <div className="row">
                    <p className="blog-excerpt text-gray-500">
                        {excerpt}...
                    </p>
                </div>
                <div className="row mt-4">
                    {/* <Link to="/"></Link> */}
                    <Link to={link} className='px-4 py-2 text-center bg-blue-900 text-white hover:bg-blue-950 font-semibold text-lg rounded-sm'>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Blog