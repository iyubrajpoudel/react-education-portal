import React from 'react'
import Layout from '../../layouts/Layout';
import Courses from '../../components/courses/Courses';

const CoursesPage = () => {
    return (
        <Layout>
            <div className='py-10'>
                <Courses />
            </div>
        </Layout>
    )
}

export default CoursesPage