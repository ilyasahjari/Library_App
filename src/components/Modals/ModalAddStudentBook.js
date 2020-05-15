import React, { useState, useEffect } from 'react';
import { connect } from "react-redux"
import { startEditBook, startRemoveBook } from '../../actions/book'
import { Button, Modal } from 'react-bootstrap';


const ModalAddStudentBook = (props) => {

    const [idStudent, setIdEtudiant] = useState('');
    const [idBook, setIdBook] = useState('');




    const onStudentChange = (e) => {
        const studentId = e.target.value;
        setIdEtudiant(studentId);
        props.getId(studentId)
    }

    const handleValidate = () => {
        props.startEditBook(props.idBook, {
            idStudent
        })
        props.handleClose();
    }
    return (
        <div>

            <Modal show={props.show} onHide={props.handleShow} animation={false}>
                <Modal.Header>
                    <Modal.Title>Selectionner Etudiant du livre:</Modal.Title>
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
                    <Button variant="primary" onClick={handleValidate}>
                        Résérver Livre
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditBook: (id, book) => dispatch(startEditBook(id, book)),
        startRemoveBook: (id) => dispatch(startRemoveBook(id))
    }
};

const mapToProps = (state) => {
    return {
        students: state.expenses
    }
}

export default connect(mapToProps, mapDispatchToProps)(ModalAddStudentBook);