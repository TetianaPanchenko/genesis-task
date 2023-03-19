import React from 'react';

import classes from '../courseInfo.module.css';

const CourseSkills = (props) => {
    const {course} = props;
    return (
        <div>
            <h2>Skills:</h2>

            <ul>
                {course.meta?.skills.map((item) => (
                    <li
                        key={item}
                        className={classes.skills}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CourseSkills;
