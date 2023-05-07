import React from 'react'
import Layout from '../../layouts/Layout';
import Courses from '../../components/courses/Courses';
import Banner from '../../components/banner/Banner';

import bannerImage from './assets/images/back2.jpg'

const CoursesPage = () => {
    return (
        <Layout>
            <div className='space-y-20 pb-20'>
                <section>
                    <Banner image={bannerImage} text={"Courses"} />
                </section>
                <section>
                    <Courses />
                </section>
            </div>
        </Layout>
    )
}

export default CoursesPage