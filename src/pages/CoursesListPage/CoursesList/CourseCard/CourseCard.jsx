import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './courseCard.module.css';
import {minutesToHours} from '../../../../helpers/pipeDuration';
import {dateGenerator} from '../../../../helpers/dateGenerator';
import Button from '../../../../components/Button/Button';
import useCourses from '../../../../providers/CoursesProvider/useCoursesProvider';

const CourseCard = ({currentCourses}) => {
    const navigate = useNavigate();
    const { loading, getCurrentCourse } = useCourses();


    const onClickCardHandler = (id) => () => {
        getCurrentCourse(id);
        navigate(`/courses/${id}`);
    }

    if (loading) {
        return <h2 className={classes.loading}>LOADING...</h2>;
    }

    return currentCourses.map((item) => {
        return(
            <li
                key={item.id}
                className={classes.item}
            >
                <img
                    className={classes.img}
                    src={item.previewImageLink  + '/cover.webp'}
                    alt='course'
                />

                <div className={classes.courseDescription}>
                    <h1 className={classes.titleCourse}>{item.title}</h1>

                    <p>{item.description}</p>
                </div>

                <div className={classes.courseInfo}>
                    <p>Duration: {`${minutesToHours(item.duration)} hours`}</p>

                    <p>Launch date: {dateGenerator(item.launchDate)}</p>

                    <p>Lessons count: {item.lessonsCount}</p>

                    <p>Rating: {item.rating}</p>

                    <Button
                        onclickHandler={onClickCardHandler(item.id)}
                        buttonText={'Show Course'}
                    />
                </div>
            </li>
        );
    })
}

export default CourseCard;
