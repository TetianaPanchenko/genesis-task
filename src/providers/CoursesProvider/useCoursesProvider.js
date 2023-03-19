import { useContext } from 'react';

import { CoursesContext } from './CoursesProvider';

const useCoursesProvider = () => {
  const context = useContext(CoursesContext);

  if (context === undefined) {
    throw new Error(
      'useCoursesProvider must be used within a CoursesProvider'
    );
  }

  return context;
};

export default useCoursesProvider;
