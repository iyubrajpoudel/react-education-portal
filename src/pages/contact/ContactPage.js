import React from 'react'
import Layout from '../../layouts/Layout'
import Banner from './../../components/banner/Banner';
import bannerImage from './assets/images/back1.jpg'

const AboutPage = () => {

    return (

        <Layout>
            {/* <div className='container flex flex-col gap-24'> */}
            <div className='space-y-20 pb-20'>
                <section>
                    <Banner image={bannerImage} text={"Contact Us"} />
                </section>
            </div>
        </Layout>
    )
}

export default AboutPage