import React  from 'react';

import {usePagination} from '../../../hooks/usePagination';
import classes from './coursesList.module.css'
import CourseCard from './CourseCard/CourseCard';
import Pagination from './Pagination/Pagination';

const CoursesList = (props) => {
    const {courses} = props;
    const {
        currentCourses,
        paginate,
        pageNumbers,
    } = usePagination(courses)

    return (
        <div>
            <ul className={classes.ul}>
                <CourseCard currentCourses = {currentCourses} />
            </ul>

            <Pagination
                paginate={paginate}
                pageNumbers={pageNumbers}
            />
        </div>
    )
}

export default CoursesList;
