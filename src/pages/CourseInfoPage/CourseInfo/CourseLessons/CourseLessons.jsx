import React, {useState} from 'react';
import ReactHlsPlayer from 'react-hls-player';

import classes from './courseLessons.module.css';
import Button from '../../../../components/Button/Button';
import videoPicture from '../../../../assets/img/videoPicture.png';


const CourseLessons = (props) => {
    const {course} = props;
    const [videoLink, setVideoLink] = useState(course.lessons[0].link);
    const [isLocked, setIsLocked] = useState(false);

    const onClickLessonHandler = (item, i) => () => {
        setIsLocked(item.status === 'locked')
        setVideoLink(item.link);
    }

    return (
        <div className={classes.videoWrapper}>
            <div className={classes.videoLesson}>
                {isLocked
                    ? <span>
                        <img
                            className={classes.imgVideo}
                            src={videoPicture}
                        />
                    </span>
                    : <ReactHlsPlayer
                        src={videoLink}
                        autoPlay={false}
                        controls={true}
                        width="100%"
                        height="auto"
                        hlsConfig = { {
                            maxLoadingDelay : 4 ,
                            minAutoBitrate : 0 ,
                            lowLatencyMode : true ,
                        } }
                    />
                }
            </div>

            <div className={classes.lessonsList}>
                <h2 className={classes.lessonHeader}>Lessons:</h2>

                <ul>
                    {course?.lessons.map((item) => {
                        console.log(item)
                        return (
                            <li className={classes.lesson} key={item.id}>
                                <img
                                    className={classes.imgLesson}
                                    src={item.previewImageLink  + '/lesson-' + item.order + '.webp'}
                                    alt='lesson'
                                />

                                <Button
                                    onclickHandler={onClickLessonHandler(item)}
                                    buttonText={item.title}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CourseLessons;
