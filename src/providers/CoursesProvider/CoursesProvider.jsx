import React, {
    useMemo,
    useState,
    useEffect,
    createContext,
} from 'react';
import axios from 'axios';

import useAuthorization from '../AuthorizationProvider/useAuthorizationProvider';

export const CoursesContext = createContext(undefined);

const CoursesProvider = (props) => {
    const { children } = props;
    const { token } = useAuthorization();
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState ([]);
    const [currentCourse, setCurrentCourse] = useState (null);
    const [currentCourseId, setCurrentCourseId] = useState(null);

    const getCourses = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                'http://api.wisey.app/api/v1/core/preview-courses',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            setCourses(response.data?.courses);
            setLoading(false);
        } catch {
            setLoading(false);
        }
    }

    const getCurrentCourse = async (id) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://api.wisey.app/api/v1/core/preview-courses/${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            setCurrentCourse(response.data);
            setLoading(false);
        } catch {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!token) return;

        getCourses();

        if (!currentCourse && currentCourseId) getCurrentCourse(currentCourseId);
    }, [token])

    const providerValue = useMemo(() => {
        return {
            loading,
            courses,
            currentCourse,
            setCurrentCourse,
            getCurrentCourse,
            setCurrentCourseId,
        };
    }, [
        loading,
        courses,
        currentCourse,
    ]);

    return (
        <CoursesContext.Provider value={providerValue}>
            {children}
        </CoursesContext.Provider>
    );
};

export { CoursesProvider };
