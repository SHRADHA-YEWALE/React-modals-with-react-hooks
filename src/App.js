import "./styles.css";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Instructions = () => {
  return (
    <div className="Instructions">
      <p>
        Welcome - let's make some modals. Begin by clicking the button below.
      </p>
    </div>
  );
};

export default function App() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const ModalTest = () => {
    return (
      <div>
        <Modal show={show1} onHide={show1} className="Modal1" id="myModal1">
          <Modal.Header>
            <Modal.Title>Modal 1</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is Model 1</Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button
              className="addModal"
              id="addModal"
              onClick={() => setShow2(true)}
            >
              Add Modal
            </Button>
            &nbsp;
            <Button onClick={() => setShow1(false)}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={show2} className="Modal2" id="myModal2">
          <Modal.Header>
            <Modal.Title>Modal 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is Modal 2</Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button
              className="addModal"
              id="addModal"
              onClick={() => setShow3(true)}
            >
              Add Modal
            </Button>
            &nbsp;
            <Button onClick={() => setShow2(false)}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={show3} className="Modal3" id="myModal3">
          <Modal.Header>
            <Modal.Title>Modal 3</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is Modal 3</Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button className="addModal" id="addModal">
              Add Modal
            </Button>
            &nbsp;
            <Button onClick={() => setShow3(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Let's Make Modals!</h1>
      <Instructions />
      <button className="ModalButton" onClick={() => setShow1(true)}>
        Make a modal
      </button>
      <ModalTest />
    </div>
  );
}
