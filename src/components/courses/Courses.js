import React from 'react'

import course1 from "./assets/images/c1.jpg"
import course2 from "./assets/images/c2.jpg"
import course3 from "./assets/images/c3.jpg"
import course4 from "./assets/images/c6.jpg"


const CourseCard = ({ coverImage, courseTitle, coursePrice, date, ratings, raters }) => {

    const generateStars = (ratings) => {

        let filledStars = ""
        for (let i = 0; i < ratings; i++) {
            filledStars += "⭐";
        }

        let temp = 5 - ratings;
        let unfilledStars = ""
        /* 
        for (i = 0; i < (5 - ratings); i++;) {
            unfilledStars += "🔯";
        } 
        */
        for (let i = 0; i < temp; i++) {
            unfilledStars += "🔯";
        }

        return filledStars + unfilledStars;
    }


    return (
        <div className='bg-blue-50 rounded-lg cursor-pointer shadow-sm hover:shadow-lg transition-all ease-in-out duration-300 lg:w-[31%]'>
            {/* <div className='w-[24rem]'> */}
            <div className='w-full'>
                <img src={coverImage} />
            </div>
            <div className="details p-4 flex flex-col gap-2 relative">
                <div className="date text-lg"><p>Updated : {date}</p></div>
                <div className="title text-2xl font-bold"><h2>{courseTitle}</h2></div>
                <div className="price bg-purple-800 text-white px-4 py-8 text-xl font-semibold absolute right-4 -top-12 rounded-full">${coursePrice}</div>
                <div className="ratings flex gap-4">
                    <p>{generateStars(ratings)}</p>
                    <p>({raters})</p>
                </div>
            </div>

        </div>
    )
}

const Courses = () => {
    return (
        <>
            <div className="courses-wrapper">
                <div className="container max-w-[1280px] mx-auto flex flex-col gap-[6rem]">
                    <div className="row text-center">
                        <h2 className='font-bold text-3xl'>Our Popular Courses</h2>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus alias consequatur sunt.</p>
                    </div>
                    {/* <div className="row boxes flex gap-6 flex-wrap justify-center"> */}
                    <div className="row boxes flex gap-10 md-gap-6 flex-wrap justify-center lg:justify-start">
                        <CourseCard
                            coverImage={course1}
                            courseTitle="Javascript Begineers Course"
                            date="2023/01/02"
                            coursePrice={19.99}
                            ratings={4}
                            raters={222}
                        />
                        <CourseCard
                            coverImage={course2}
                            courseTitle="CSS Begineers Course"
                            date="2022/12/02"
                            coursePrice={9.99}
                            ratings={3}
                            raters={112}
                        />
                        <CourseCard
                            coverImage={course3}
                            courseTitle="Python Begineers Course"
                            date="2023/01/12"
                            coursePrice={29.99}
                            ratings={5}
                            raters={111}
                        />
                        <CourseCard
                            coverImage={course4}
                            courseTitle="Angular Begineers Course"
                            date="2023/01/02"
                            coursePrice={19.99}
                            ratings={4}
                            raters={222}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses