// Dependencies
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Views
import HomePage from '../../views/homePage/HomePage';
import ResultsPage from '../../views/resultsPage/ResultsPage';
import NotFoundPage from '../../views/notFoundPage/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} exact={true}/>
          <Route path="/:name/:repo" element={<ResultsPage/>} exact={true}/>
          <Route path="/does/not/exist" element={<NotFoundPage/>} exact={true}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default AppRouter;