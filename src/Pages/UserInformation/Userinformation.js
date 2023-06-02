import React, { useContext, useState } from "react";
import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import "../../Pages/UserInformation/UserInformation.css";

const Userinformation = () => {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(user);

  const handleBooking = (e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const image=form.image.value;
    console.log(name,email,image)
  }

  return (
    <Container>
      <Row>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Profile Picture</th>
                <th scope="col">Edit Information</th>
              </tr>
            </thead>
            <tbody>
              <tr scope="row" style={{ verticalAlign: "middle" }}>
                <td>{user?.displayName}</td>
                <td>{user?.email}</td>
                <td>
                  <img className="rounded-circle" src={user?.photoURL} alt="" />
                </td>
                <td className="text-center" style={{ cursor: "pointer" }}>
                  <Button variant="primary" onClick={handleShow}>
                    <FaEdit style={{ marginTop: "-5px", marginLeft: "2px" }} />
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Update Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Container>
                        <Row>
                          <Form onSubmit={handleBooking}>
                            <div className="col-12">
                              <label>Name</label>
                              <span className="ms-2 text-success">*</span>
                              <br />
                              <input
                                type="text" name="name"
                                value={user?.displayName}
                                className="w-full rounded-1 input-border mt-2"
                              />
                            </div>
                            <div className="col-12 mt-3">
                              <label>Email</label>
                              <span className="ms-2 text-success">*</span>
                              <br />
                              <input
                                type="email"
                                value={user?.email} name="email"
                                className="w-full rounded-1 input-border mt-2"
                              />
                            </div>
                            <div className="col-12 mt-3">
                              <label>Image</label>
                              <span className="ms-2 text-success">*</span>
                              <br />
                              <img src={user?.photoURL} alt="" />
                              <input
                                type="file"
                                className="w-full rounded-1 input-border mt-2"
                                name="image"
                                id=""
                              />
                            </div>
                          </Form>
                        </Row>
                      </Container>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Submit
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
};

export default Userinformation;
