import React from 'react';

import CoursesList from './CoursesList/CoursesList';
import Layout from '../../components/Layout/Layout';
import useCourses from '../../providers/CoursesProvider/useCoursesProvider';

const CoursesListPage = () => {
    const { courses } = useCourses();

    return (
        <Layout>
            <CoursesList courses={courses} />
        </Layout>
    )
}

export default CoursesListPage;
