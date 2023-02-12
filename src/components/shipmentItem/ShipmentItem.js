import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const ShipmentItem = ({shipment}) => {

  const navigate = useNavigate();

  return(
  <tr>
    <td>{shipment.orderNo}</td>
    <td>{shipment.date}</td>
    <td>{shipment.customer}</td>
    <td>{shipment.trackingNo}</td>
    <td>{shipment.status}</td>
    <td>{shipment.consignee}</td>
    <td>
    <Button onClick={() => navigate(`/item?=${shipment.orderNo}`)} variant="info" className='mr-2'>Update</Button>
    <Button onClick={() => shipment.filter(s => s.orderNo !== shipment.orderNo)} variant="danger">Delete</Button>
    </td>
  </tr>
   );
};

export default ShipmentItem;