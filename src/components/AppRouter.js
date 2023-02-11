import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '..';
import Shipment from '../pages/Shipment';
import Table from '../pages/Table';

const AppRouter = () => {
    const {shipment} = useContext(Context)
    return (
        <Routes>
            <Route path='/main' element={<Table/>}></Route>
            <Route path='/shipment' element={<Shipment/>}></Route>
            <Route path='*' element={<Navigate to={<Table/>}/>}></Route>
        </Routes>
    );
}

export default AppRouter;