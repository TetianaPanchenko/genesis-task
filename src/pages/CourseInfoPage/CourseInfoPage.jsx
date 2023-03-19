import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import CourseInfo from './CourseInfo/CourseInfo';
import useCourses from '../../providers/CoursesProvider/useCoursesProvider';
import classes from './CourseInfo/courseInfo.module.css';

const CourseInfoPage = () => {
    const { courseId } = useParams();
    const {
        loading,
        currentCourse,
        setCurrentCourse,
        setCurrentCourseId,
    } = useCourses();

    useEffect(() => {
        setCurrentCourseId(courseId);

        return () => {
            setCurrentCourse(null);
            setCurrentCourseId(null);
        }
    }, [])

    return(
        <Layout>
            {!currentCourse && loading && <h2 className={classes.loading}>LOADING...</h2>}

            {!!currentCourse && <CourseInfo course={currentCourse} />}
        </Layout>
    )
}

export default CourseInfoPage;
