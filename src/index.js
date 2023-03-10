import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShipmentStore from './store/ShipmentStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    shipment: new ShipmentStore()
  }}>
    <App />
  </Context.Provider>
    
);

