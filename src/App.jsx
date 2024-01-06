/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateCar from './pages/CreateCars.jsx';
import EditCar from './pages/EditCar.jsx';
import DeleteCar from './pages/DeleteCar.jsx';
import ShowCar from './pages/ShowCar.jsx';

const App = () => {
  return (
    <Routes>
      {<Route path='/' element={<Home />} />},
      {<Route path='/cars/create' element={<CreateCar />} />},
      {<Route path='/cars/details/:id' element={<ShowCar />} />},
      {<Route path='/cars/edit/:id' element={<EditCar />} />},
      {<Route path='/cars/delete/:id' element={<DeleteCar />} />}
    </Routes>
  );
};

export default App;
