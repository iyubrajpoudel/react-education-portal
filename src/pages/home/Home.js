import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Features from '../../components/features/Features'

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
        </>
    )
}

export default Home