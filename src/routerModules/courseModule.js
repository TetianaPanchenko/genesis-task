import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import CoursesListPage from '../pages/CoursesListPage/CoursesListPage';
import CourseInfoPage from '../pages/CourseInfoPage/CourseInfoPage';
import {CoursesProvider} from '../providers/CoursesProvider/CoursesProvider';

const CourseModule = () => {
    return (
        <CoursesProvider>
            <Routes>
                <Route path='/courses' element={<CoursesListPage />} />

                <Route path='/courses/:courseId' element={<CourseInfoPage />} />

                <Route
                    path="*"
                    element={
                        <Navigate
                            to='/courses'
                            replace={true}
                        />
                    }
                />
            </Routes>
        </CoursesProvider>
    );
};

export default CourseModule;

