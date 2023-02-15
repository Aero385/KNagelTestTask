import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function modalForm({ tableData, updatedShipment, setUpdatedShipment, visible, onClose }) {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onClose}>
          Submit
        </Button>,
      ]}
    >
      <form>
        <table>
          <tbody>
            {tableData.map(({ label, prop }) => (
              <tr key={prop}>
                <td>{label}</td>
                <td>
                  <input
                    type="text"
                    value={updatedShipment[prop]}
                    onChange={(e) =>
                      setUpdatedShipment({ ...updatedShipment, [prop]: e.target.value })
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </Modal>
  );
}

export default modalForm;