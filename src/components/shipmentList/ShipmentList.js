import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import ShipmentItem from '../shipmentItem/ShipmentItem';
import { Table } from 'react-bootstrap';
import { columnNames } from '../../utils/consts';
// import data from '../../assets/Shipments.json';


const ShipmentList = observer(() => {
const {shipment} = useContext(Context)  // 1 option
// const [item, setItem] = useState(data) 
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
                <ShipmentItem key={item.orderNo} shipment={item}/>
            )}
        </tbody>
    </Table>
  );
});

export default ShipmentList;