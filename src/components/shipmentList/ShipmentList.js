import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import ShipmentItem from '../shipmentItem/ShipmentItem';
import { Table } from 'react-bootstrap';
import { columnNames } from '../../utils/consts';
import { fetchShipment } from '../../http';




const ShipmentList = observer(() => {
const {shipment} = useContext(Context)

const handleDelete = (orderNo) => {
    shipment.setShipment(shipment.shipment.filter((item) => item.orderNo !== orderNo));
  }

  useEffect(() => {
    fetchShipment().then(response => {
      shipment.setShipment(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, [shipment]);

  return (
    <Table striped bordered hover>
        <thead>
            <tr>        
                {columnNames.map(item => 
                    <th>
                        {item.name}
                    </th>
                )}
            </tr>
        </thead>
        <tbody>
            {shipment.shipment.map(item =>                       
                <ShipmentItem key={item.orderNo} shipment={item} onDelete={handleDelete}/>
            )}
        </tbody>
    </Table>
  );
});

export default ShipmentList;