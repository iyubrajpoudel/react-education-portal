import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Features from '../../components/features/Features'
import Courses from '../../components/courses/Courses'
import Register from '../../components/register/Register'

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <section>
                <Hero />
            </section>
            <section className='px-2 py-[6rem]'>
                <Features />
            </section>
            <section className='px-2 py-[6rem]'>
                <Courses />
            </section>
            <section>
                <Register />
            </section>
        </>
    )
}

export default Home