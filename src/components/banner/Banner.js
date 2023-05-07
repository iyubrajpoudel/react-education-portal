import React from 'react'

const Banner = ({ image, text }) => {

    const bgStyle = {
        background: `linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url(${image})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
    }

    return (
        <div className={`row banner h-[10rem] md:h-[14rem] text-white flex justify-center items-center`} style={bgStyle}>
            <h2 className='text-2xl md:text-3xl font-bold'>{text}</h2>
        </div>
    )
}

export default Banner