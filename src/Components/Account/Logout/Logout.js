import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from "react-router-dom";
const Logout = ({ setLogIn }) => {
    const history = useHistory();
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const logoutHandler = () => {
        setShow(false)
        setLogIn(false)
        history.push('/')
    };
    return (
        <div className="ranking">
            <div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title color="red">Do you want to log out?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        If you want to logout press Continue, otherwise press Cancle
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancle
                        </Button>
                        <Button variant="primary" onClick={logoutHandler} > Continue</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div >



    );
};

export default Logout;
