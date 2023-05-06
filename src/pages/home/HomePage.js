import React from 'react'
import Hero from '../../components/hero/Hero'
import Features from '../../components/features/Features'
import Courses from '../../components/courses/Courses'
import Register from '../../components/register/Register'
import Experts from '../../components/experts/Experts'
import Layout from '../../layouts/Layout';

const HomePage = () => {
    return (
        <>
            <Layout>
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
                <section className="px-2 py-[6rem]">
                    <Experts />
                </section>
            </Layout>
        </>
    )
}

export default HomePage