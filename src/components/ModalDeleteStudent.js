import React from "react"
import { Modal, Button } from "react-bootstrap";

export default (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title >Suppression Etudiant</Modal.Title>
            </Modal.Header>
            <Modal.Body> Voulez-vous vraiment supprimer l'Etudiant ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Annuler
                </Button>
                <Button variant="primary" onClick={props.handleDeleteStudent}>
                    Valider
                </Button>
            </Modal.Footer>
        </Modal>

    );
}
