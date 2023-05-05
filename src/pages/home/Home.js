import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <section>
                <Hero />
            </section>
        </>
    )
}

export default Home