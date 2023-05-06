import React from 'react'
import background from './assets/images/back.jpg'
import './Hero.css'

/* 
const Button = ({ children, classes }) => {
    return (
        <button className={classes}>{children}</button>
    )
} 
*/

const Button = ({ children }) => {
    return (
        <button className="bg-blue-900 text-white font-semibold text-lg px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-all ease-in-out duration-300 cursor-pointer">{children}</button>
    )
}

const Hero = () => {

    const bgStyle = {
        // background: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url("/hero/assets/images/back.jpg")`
        background: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url(${background})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }

    return (
        <>
            <div className="hero-wrapper" style={bgStyle}>
                <div className="container min-h-[80vh] flex flex-col gap-8 justify-center items-center">
                    <div className="content text-white flex flex-col items-center">
                        <div className='heading text-3xl font-semibold p-2 text-center'><h1>Enhance Your Future With TechEduca</h1></div>
                        <div className="para text-xl p-2 text-justify md:text-center lg:w-3/4"><>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque asperiores neque laboriosam deserunt voluptate nam animi. Facilis culpa ut libero et hic, odio maiores repellendus commodi harum doloremque ducimus ex placeat soluta eveniet aperiam quos exercitationem non animi omnis voluptatem?</></div>
                    </div>
                    <div className="buttons flex gap-4">
                        {/* <Button>Learn More</Button> */}
                        <button className="bg-blue-900 text-white font-semibold text-lg px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-all ease-in-out duration-300 cursor-pointer">Learn More</button>
                        <button className="bg-yellow-500 text-white font-semibold text-lg px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-all ease-in-out duration-300 cursor-pointer">Visit Courses</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero