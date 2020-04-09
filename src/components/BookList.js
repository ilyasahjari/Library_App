import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { startRemoveBook } from '../actions/book'
import getVisibleBooks from "../selectors/book"

export const BookList = (props) => {

    const getStudenttById = (id) => {
        const student = props.students.find((student) => student.id === id);
        return (student) ? 'Nom Etudiant : ' +  student.nom +' '+ student.prenom : " "
    }


    return (
        <div className="App ">
            <div className="row">
                {
                    props.books.map((book) => {
                        return (
                            <div className="col-lg-4 col-md-6 mb-4" key={book.id}>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <Link to={`/BookEdit/${book.id}`} title="Edit item">{book.titre}</Link>
                                        </h4>
                                        <h5> Auteur : {book.auteur}</h5>
                                        <h5>Etat : {book.status}</h5>

                                        <p className="card-text">Niveau : {book.niveau}</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">{ getStudenttById(book.idStudent)}</small><br/>
                                        <button className="btn btn-primary" onClick={()=> props.startRemoveBook(book.id)}>Supprimer Livre</button>
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