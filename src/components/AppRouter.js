import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Shipment from '../pages/Shipment';
import Item from '../pages/Item';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/item' element={<Item/>}></Route>
            <Route path='/shipment' element={<Shipment/>}></Route>
            <Route path='*' element={<Navigate to='/shipment'/>}></Route>
        </Routes>
    );
}

export default AppRouter;