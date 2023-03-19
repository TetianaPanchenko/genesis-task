import React from 'react';

import classes from './courseInfo.module.css';
import CourseLessons from './CourseLessons/CourseLessons';
import CourseSkills from './CourseSkills/CourseSkills';

const CourseInfo = (props) => {
    const {course} = props;

    return (
        <div className={classes.containerInfo}>
            <h1 className={classes.titleCourse}>
                {course?.title}
            </h1>

            <p className={classes.courseDetails}>
                {course?.description}
            </p>

            <CourseSkills course={course} />

            <CourseLessons course={course} />
        </div>
    )
}

export default CourseInfo;
