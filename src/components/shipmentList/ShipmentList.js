import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import ShipmentItem from '../shipmentItem/ShipmentItem';
import { Table } from 'react-bootstrap';

const columnNames = [
  { name: 'ORDER NO' },
  { name: 'DELIVERY TIME' }, 
  { name: 'CUSTOMER' }, 
  { name: 'TRACKING NO' }, 
  { name: 'STATUS' }, 
  { name: 'CONSIGNEE' },
  { name: '' },
];


const ShipmentList = observer(() => {
const {shipment} = useContext(Context)
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
                <ShipmentItem key={item.id} shipment={item}/>
            )}
        </tbody>
    </Table>
  );
});

export default ShipmentList;