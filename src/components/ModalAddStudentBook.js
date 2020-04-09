import React, { useState } from 'react';
import { connect } from "react-redux"
import { startEditBook } from '../actions/book'
import { Button, Modal } from 'react-bootstrap';


const ModalAddStudentBook = (props) => {

    const [idEtudiant, setIdEtudiant] = useState('');

    const onStudentChange = (e) => {
        const studentId = e.target.value;
        setIdEtudiant(studentId);
        props.getId(studentId)
    }

    return (
        <div>

            <Modal show={props.show} onHide={props.handleShow} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Selectionner Etudiant :</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className="browser-default custom-select" onChange={onStudentChange}>
                        <option></option>
                        {props.students.map((student) => {
                            return (
                            <option key={student.id} value={student.id}>{student.nom} {student.prenom}</option>
                            );
                        })}
                    </select>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Fermer
            </Button>
                    <Button variant="primary" onClick={props.handleValidate}>
                        Résérver Livre
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};


const mapToProps = (state) => {
    return {
        students: state.expenses
    }
}

export default connect(mapToProps)(ModalAddStudentBook);