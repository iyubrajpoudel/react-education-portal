import React from 'react'
import Layout from '../../layouts/Layout'
import bannerImage from './assets/images/back1.jpg'
import Banner from './../../components/banner/Banner';
import About from './../../components/about/About';
import Features from './../../components/features/Features';
import Clients from './../../components/clients/Clients';


const AboutPage = () => {

    return (

        <Layout>
            {/* <div className='container flex flex-col gap-24'> */}
            <div className='space-y-20 pb-20'>
                <section>
                    <Banner image={bannerImage} text={"About Us"} />
                </section>
                <section>
                    <About />
                </section>
                <section>
                    <Features />
                </section>
                <section>
                    <Clients />
                </section>
            </div>
        </Layout>
    )
}

export default AboutPage