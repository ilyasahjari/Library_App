import React from "react"
import { Modal, Button } from "react-bootstrap";

export default (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title >Payement</Modal.Title>
            </Modal.Header>
            <Modal.Body className="alert"> Voulez-vous vraiment effectuer le Payement ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Annuler
                </Button>
                <Button variant="primary" onClick={props.handleAddPayement}>
                    Valider
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

