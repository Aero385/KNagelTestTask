import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './styles.css';



const ShipmentItem = ({shipment, onDelete}) => {

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
  const handleDelete = () => {
    onDelete(shipment.orderNo)
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
      <td className='btn-container'>
      <Button onClick={modalShow} variant='info' className='mr-2'>Update</Button>
      <Button onClick={handleDelete} variant='danger'>Delete</Button>
      </td>
    </tr>
    <Modal show={show} onHide={modalClose}>
        <Modal.Header >
          <Modal.Title>Update Shipment</Modal.Title>
          <Button onClick={handleClose} variant="dark">X</Button>
        </Modal.Header>
        <Modal.Body style={{padding: 0}}>
        <form className='shipment-form'>
            <table>
              <tbody className='shipment-table'>
                <tr>
                  <td className='form-label'>Order No:</td>
                  <td className='form-input'><input type="text" value={updatedShipment.orderNo} onChange={e => setUpdatedShipment({ ...updatedShipment, orderNo: e.target.value })} /></td>
                </tr >
                <tr>
                  <td className='form-label'>Date:</td>
                  <td className='form-input'><input type='text' value={updatedShipment.date} onChange={e => setUpdatedShipment({ ...updatedShipment, date: e.target.value })} /></td>
                </tr>
                <tr>
                  <td className='form-label'>Customer:</td>
                  <td className='form-input'><input type='text' value={updatedShipment.customer} onChange={e => setUpdatedShipment({ ...updatedShipment, customer: e.target.value })} /></td>
                </tr>
                <tr>
                  <td className='form-label'>trackingNo:</td>
                  <td className='form-input'><input type='text' value={updatedShipment.trackingNo} onChange={e => setUpdatedShipment({ ...updatedShipment, trackingNo: e.target.value })} /></td>
                </tr>
                <tr>
                  <td className='form-label'>Status:</td>
                  <td className='form-input'><input type='text' value={updatedShipment.status} onChange={e => setUpdatedShipment({ ...updatedShipment, status: e.target.value })} /></td>
                </tr>
                <tr>
                  <td className='form-label'>Consignee:</td>
                  <td className='form-input'><input type='text' value={updatedShipment.consignee} onChange={e => setUpdatedShipment({ ...updatedShipment, consignee: e.target.value })} /></td>
                </tr>
              </tbody>
            </table>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleUpdate}>
            Save
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
  </>
   );
};

export default ShipmentItem;