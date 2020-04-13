import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { startRemoveBook, startEditBook } from '../actions/book'
import getVisibleBooks from "../selectors/book"
import ModalAddStudentBook from "./ModalAddStudentBook"


export const BookList = (props) => {

    let idStudent = ''
    const [modalShow, setModalShow] = useState(false);
    let idBook =""



    const getStudenttById = (id) => {
        const student = props.students.find((student) => student.id === id);
        return (student) ? 'Nom Etudiant : ' +  student.nom +' '+ student.prenom : " "
    }


    const handleClose =()=>{
        setModalShow(false)
    }
    
    const getBookid = (id) =>{
        return id
    }

    const getId = (id) =>{
        idStudent= id
        console.log(idStudent)
    }

    const handleShow = () =>{
        setModalShow(true)
    }

    return (
        <div className="App ">
            <div className="row">
                {
                    props.books.map((book,index) => {
                        return (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <Link to={`/BookEdit/${book.id}`} title="Edit item">{book.titre}</Link>
                                        </h4>
                                        <h5> Auteur : {book.auteur}</h5>
                                        <h5>Etat : {book.status}</h5>
                                        <p className="card-text">Niveau : {book.niveau}</p>
                                        <small className="text-muted">{ getStudenttById(book.idStudent)}</small><br/>
                                    </div>
                                    <div className="row card-footer">
                                       <div className="col">
                                        <button className="btn btn-primary" onClick={() => setModalShow(true)}>Résérver Livre (Not working)</button><br/>
                                        <ModalAddStudentBook show={modalShow} handleClose={()=>setModalShow(false)} handleShow={()=>setModalShow(true)} idBook={book.id} getId={getId}/>
                                       </div> 
                                       <div className="col">
                                        <button className="btn btn-primary" onClick={()=> props.startRemoveBook(book.id)}>Supprimer Livre</button>
                                        </div>
                                    </div>
                                </div>      
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        startEditBook: (id, book) => dispatch(startEditBook(id, book)),
        startRemoveBook: (id) => dispatch(startRemoveBook(id))
    }
};

const mapToProps = (state) => {
    return {
        books: getVisibleBooks(state.books,state.filters),
        students: state.expenses
    }
}

export default connect(mapToProps,mapDispatchToProps)(BookList);