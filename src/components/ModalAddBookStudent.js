import React, { useState, useEffect } from 'react';
import { connect } from "react-redux"
import { startEditBook, startRemoveBook } from '../actions/book'
import { Button, Modal } from 'react-bootstrap';


const ModalAddBookStudent = (props) => {

    const [idBook, setIdBook] = useState('');
    const [idStudent, setIdStudent] = useState(props.idStudent);
    let status = "emprunté"


    const onBookChange = (e) => {
        const bookId = e.target.value;
        setIdBook(bookId);
    }

    const handleValidate = () => {
        if (idBook)
            props.startEditBook(idBook, {
                idStudent,
                status
            })
        props.handleClose();

    }

    return (
        <div>
            <div onClick={e => e.stopPropagation()}>

                <Modal show={props.show} onHide={props.handleClose}  animation={true}>
                    <Modal.Header closeButton={true}>
                        <Modal.Title>Selectionner Livre à emprunté  : </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <select className="browser-default custom-select" onChange={onBookChange}>
                            <option></option>
                            {props.books.map((book) => {
                                return (
                                    <option key={book.id} value={book.id}>{book.titre}, {book.auteur}</option>
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
        books: state.books.filter((book) => book.status.toLowerCase().includes("disponible")),
        students: state.expenses
    }
}

export default connect(mapToProps, mapDispatchToProps)(ModalAddBookStudent);