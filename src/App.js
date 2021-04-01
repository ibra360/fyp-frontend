import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroupAddon, InputGroupText } from "reactstrap";
import axios from "axios";

import {
  InputGroup,
  Spinner,
  Card,
  Button,
  Input,
  Col,
  Row,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import "./App.css";

function App() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState();
  const [age, setAge] = useState();

  const [rno, setRno] = useState();
  const [did, setDid] = useState();

  const addDriver = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/driver/add", {
        name,
        cnic,
        age,
      });

      console.log("Response:", response);
      setModal(false);
      window.alert("Driver Succesfully Added");
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const addBus = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/bus/add", {
        registrationNo: rno,
        driver: did,
      });
      console.log("Response:", response);
      setModal(false);
      window.alert("Bus Succesfully Added");
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className=" mx-auto">Smart School Bus</NavbarBrand>
      </Navbar>
      <div className="mt-5">
        <Button color="primary" className="App-header w-25 " onClick={toggle}>
          Driver
        </Button>
      </div>
      <div>
        <Button color="info" className=" App-header w-25 " onClick={toggle2}>
          Bus
        </Button>
      </div>
      <div>
        <Button color="secondary" className="App-header w-25" onClick={toggle}>
          Student
        </Button>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add Driver</ModalHeader>
          <ModalBody>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Name</InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>

            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>CNIC</InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="enter your CNIC"
                onChange={(e) => setCnic(e.target.value)}
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Age</InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="enter your Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={addDriver}>
              Confirm
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modal2} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Add Bus</ModalHeader>
          <ModalBody>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Reg.No</InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="enter your reg.No"
                onChange={(e) => setRno(e.target.value)}
              />
            </InputGroup>

            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>ID</InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="enter Driver Id"
                onChange={(e) => setDid(e.target.value)}
              />
            </InputGroup>
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={addBus}>
              Confirm
            </Button>
            <Button color="secondary" onClick={toggle2}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default App;
