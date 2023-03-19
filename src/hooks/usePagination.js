import {useState} from 'react';

const coursesPerPage = 10;

export const usePagination = (courses) => {
    const [currentPage, setCurrentPage] = useState(1);
    const firstCursesIndex = currentPage * coursesPerPage - coursesPerPage;
    const currentCourses = courses.slice(firstCursesIndex, currentPage * coursesPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(courses.length / coursesPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => () => setCurrentPage(pageNumber);

    return {
        pageNumbers,
        currentCourses,
        paginate,
    }
}
