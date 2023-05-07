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
                <div className='space-y-20 pb-10'>
                    <section>
                        <Hero />
                    </section>
                    <section>
                        <Features />
                    </section>
                    <section>
                        <Courses />
                    </section>
                    <section>
                        <Register />
                    </section>
                    <section>
                        <Experts />
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default HomePage