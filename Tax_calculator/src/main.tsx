import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AddPage from './pages/add';
import ViewPage from './pages/view';

const Main = () => {
    return (
        <Routes>
            <Route path='/add' element={<AddPage/>}></Route>
            <Route path='/' element={<ViewPage/>}></Route>
        </Routes>
    );
}

export default Main;