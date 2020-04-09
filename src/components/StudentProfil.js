import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { connect } from 'react-redux'
import { startEditBook } from '../actions/book'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Tabs, Tab } from 'react-bootstrap'

const StudentProfil = (props) => {
    const [id, setId] = useState(props.expense ? props.expense.id : '');
    const [nom, setnom] = useState(props.expense ? props.expense.nom : '');
    const [prenom, setPrenom] = useState(props.expense ? props.expense.prenom : '');
    const [classe, setClasse] = useState(props.expense ? props.expense.classe : '');
    const [date, setDate] = useState(props.expense ? new Date(props.expense.date) : new Date());
    const [email, setEmail] = useState(props.expense ? props.expense.email : '');
    const [idParent1, setIdParent1] = useState(props.expense ? props.expense.idParent1 : '');
    const [idParent2, setIdParent2] = useState(props.expense ? props.expense.idParent2 : '');
    const [idStudent, setIdStudent] = useState('');
    const [status, setStatusLivre]= useState('rendu');


    const classeFullName = {
        "Tnle": "Année Terminal",
        "2nde": "Seconde Année lycée",
        "1ere": "Première Année lycée"
    }


    const getParentById = (id) => {
        const parent = props.parents.find((parent) => parent.id === id);
        return (parent) ? parent.nom + ' ' + parent.prenom : " ";
    }

    const getBookById = (id) => {
        const books = props.books.filter((book) => book.idStudent === id);
        return (books) ? books : null;
    }

    return (
        <div className="App">
            <div className="container main-section App">
                <div className="row">

                    <div className="row user-left-part">
                        {/* <div className="col-sm-3 col-xs-12 user-profil-part pull-left">

                        </div> */}
                        <div className="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section">
                            <div className="row profile-right-section-row">
                                <div className="col-md-8 profile-header">
                                    <div className="row">
                                        <div className="col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left">
                                            <h3>{prenom} {nom}</h3>
                                            <h5>Etudiant</h5>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-6 profile-header-section1 text-right">
                                            <Link to={`/edit/${id}`} title="Edit item"><button className="btn btn-primary">Modifier</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                                <Tab eventKey="profile" title="Info Profile">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="profile">
                                                        <br />
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>ID</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{id}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Nom</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{prenom + " " + nom}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Email</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{email}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Date de naissance </label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{moment(date).format('DD/MM/YYYY')}</p>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Classe </label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{classeFullName[classe]}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Parent 1 </label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{getParentById(idParent1)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Parent 2 </label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{getParentById(idParent2)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="books" title="Livres empruntés">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="profile">

                                                        <div className="row">
                                                            {
                                                                getBookById(id).map((book,index) => {
                                                                    return (
                                                                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                                                            <div className="card h-100">
                                                                                <div className="card-body">
                                                                                    <h4 className="card-title">
                                                                                        <Link to={`/BookEdit/${book.id}`} title="Edit item">{book.titre}</Link>
                                                                                    </h4>
                                                                                    <h5> Auteur : {book.auteur}</h5>
                                                                                    <p className="card-text">Niveau : {book.niveau}</p>
                                                                                    <button className="btn btn-primary" onClick={()=>{props.startEditBook(book.id,{idStudent, status})}}>Remettre</button>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                    </div>

                                                </Tab>
                                                <Tab eventKey="contact" title="Réglement Produit">
                                                    <h1>coucou</h1>
                                                </Tab>
                                            </Tabs>
                                            {/* <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" role="tab" data-toggle="tab"> Info Profile</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#buzz" role="tab" data-toggle="tab" > Réglement Produit</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" role="tab" data-toggle="tab"><i className="fas fa-user-circle"></i> Livres empruntés</a>
                                                </li>
                                            </ul> */}



                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        startEditBook: (id, book) => dispatch(startEditBook(id, book))
    }
};


const mapToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id),
        parents: state.parents,
        books: state.books
    }
}


export default connect(mapToProps, mapDispatchToProps)(StudentProfil);