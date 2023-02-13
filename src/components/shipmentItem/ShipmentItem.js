import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ShipmentItem = ({shipment}) => {

  const [show, setShow] = useState(false)
  const [lastShipment, setOldShipment] = useState(shipment);
  const [updatedShipment, setUpdatedShipment] = useState(shipment);

  const modalClose = () => setShow(false)
  const modalShow = () => {
    setShow(true)
    setOldShipment(updatedShipment)
  }
  const handleUpdate = () => {
    setUpdatedShipment(updatedShipment)
    modalClose()
  }
  const handleClose = () => {
    setUpdatedShipment(lastShipment)
    modalClose()
  }

  return(
  <>
    <tr>
      <td>{updatedShipment.orderNo}</td>
      <td>{updatedShipment.date}</td>
      <td>{updatedShipment.customer}</td>
      <td>{updatedShipment.trackingNo}</td>
      <td>{updatedShipment.status}</td>
      <td>{updatedShipment.consignee}</td>
      <td>
      <Button onClick={modalShow} variant="info" className='mr-2'>Update</Button>
      <Button onClick={() => shipment.filter(s => s.orderNo !== shipment.orderNo)} variant="danger">Delete</Button>
      </td>
    </tr>
    <Modal show={show} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Shipment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <table>
              <tbody>
                <tr>
                  <td>Order No:</td>
                  <td><input type="text" value={updatedShipment.orderNo} onChange={e => setUpdatedShipment({ ...updatedShipment, orderNo: e.target.value })} /></td>
                </tr>
                    <tr>
                      <td>Date:</td>
                      <td><input type="text" value={updatedShipment.date} onChange={e => setUpdatedShipment({ ...updatedShipment, date: e.target.value })} /></td>
                    </tr>
                    <tr>
                      <td>Customer:</td>
                      <td><input type="text" value={updatedShipment.customer} onChange={e => setUpdatedShipment({ ...updatedShipment, customer: e.target.value })} /></td>
                    </tr>
                    <tr>
                      <td>trackingNo:</td>
                      <td><input type="text" value={updatedShipment.trackingNo} onChange={e => setUpdatedShipment({ ...updatedShipment, trackingNo: e.target.value })} /></td>
                    </tr>
                    <tr>
                      <td>Status:</td>
                      <td><input type="text" value={updatedShipment.status} onChange={e => setUpdatedShipment({ ...updatedShipment, status: e.target.value })} /></td>
                    </tr>
                    <tr>
                      <td>Consignee:</td>
                      <td><input type="text" value={updatedShipment.consignee} onChange={e => setUpdatedShipment({ ...updatedShipment, consignee: e.target.value })} /></td>
                    </tr>
              </tbody>
            </table>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
  </>
   );
};

export default ShipmentItem;