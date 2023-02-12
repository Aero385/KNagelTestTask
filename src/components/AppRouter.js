import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Shipment from '../pages/Shipment';
import Table from '../pages/Table';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/item' element={<Table/>}></Route>
            <Route path='/shipment' element={<Shipment/>}></Route>
            <Route path='*' element={<Navigate to='/shipment'/>}></Route>
        </Routes>
    );
}

export default AppRouter;