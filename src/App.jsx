import React from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';

import CourseModule from './routerModules/courseModule';
import {AuthorizationProvider} from './providers/AuthorizationProvider/AuthorizationProvider';


function App() {
  return (
      <AuthorizationProvider>
          <Routes>
              <Route path='*' element={<CourseModule />} />
          </Routes>
      </AuthorizationProvider>
  );
}

export default App;
