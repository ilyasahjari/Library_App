import React, { useState } from 'react'
import ErrorMessage from '../ErrorMessage'
import { connect } from 'react-redux'
import { startEditBook } from '../../actions/book'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Tabs, Tab } from 'react-bootstrap'
import ModalAddBookStudent from '../Modals/ModalAddBookStudent'
import Checkbox from '@material-ui/core/Checkbox';
import { startEditPayement, startAddPayement } from '../../actions/payement'
import PayementAdd from '../Payement/PayementAdd'
import Dnd from '../DragNDrop/DND'
import Kanban from '../DragNDrop/StudentBookList'



const StudentProfil = (props) => {
    const [id, setId] = useState(props.expense ? props.expense.id : '');
    const [idParent1, setIdParent1] = useState(props.expense ? props.expense.idParent1 : '');
    const [idParent2, setIdParent2] = useState(props.expense ? props.expense.idParent2 : '');
    const [idStudent, setIdStudent] = useState('');
    const [status, setStatusLivre] = useState('disponible');
    const [showButtonAddLivre, setShowButtonAddLivre] = useState(false);
    const [modalShow, setModalShow] = useState(false);


    // const [disabled, setDisabled] = useState({
    //     caution: props.payement.caution ? true : false,
    //     calculatrice: props.payement.calculatrice ? true : false,
    //     normographe: props.payement.normographe ? true : false,
    //     cleUSB: props.payement.cleUSB ? true : false,
    // });

    
    const classeFullName = {
        "Tnle": "Année Terminal",
        "2nde": "Seconde Année lycée",
        "1ere": "Première Année lycée"
    }

    // const handleCheckBox = (e) => {
    //     setState({ ...state, [e.target.name]: e.target.checked });
    //     (e.target.checked) ? setTotalPayed(totalPayed + elementPrice[e.target.name]) : setTotalPayed(totalPayed - elementPrice[e.target.name])
    // }

    

    const getParentById = (id) => {
        const parent = props.parents.find((parent) => parent.id === id);
        return (parent) ? parent.nom + ' ' + parent.prenom : " ";
    }

    const getBookById = (id) => {
        const books = props.books.filter((book) => book.idStudent === id);
        return (books) ? books : null;
    }


    return (
        <div className="App fadeIn">
            <div className="container main-section App">

                    <div className="row user-left-part">
                        <div className="col-sm-3 col-xs-12 user-profil-part pull-left">
                            
                        </div> 
                        <div className="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section">
                            <div className="row profile-right-section-row">
                                <div className="col-md-8 profile-header">
                                    <div className="row">
                                        <div className="col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left">
                                            <h3>{props.expense.prenom} {props.expense.nom}</h3>
                                            <h5>Etudiant</h5>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-4 profile-header-section1 text-right">

                                            <Link to={`/edit/${id}`} title="Edit item"><button>Modifier</button></Link>
                                            <button onClick={() => setModalShow(true)}>Ajouter Livre</button>

                                            <ModalAddBookStudent show={modalShow} handleClose={() => setModalShow(false)} handleShow={() => setModalShow(true)} idStudent={id} niveau={props.expense.classe} />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Tabs defaultActiveKey="AjoutLivre" id="uncontrolled-tab-example">

                                                <Tab eventKey="AjoutLivre" title="Ajout Livre">
                                                    <Kanban idStudent={id}/>
                                                </Tab>

                                                <Tab eventKey="payement" title="Réglement Produit">
                                                    <PayementAdd idStudent={id} />      
                                                </Tab>

                                                <Tab eventKey="books" title="Livres empruntés">
                                                    <div role="tabpanel" className="tab-pane fade show active">

                                                        <div className="row">
                                                            {
                                                                getBookById(id).map((book, index) => {
                                                                    return (
                                                                        <div className="col-lg-5 col-md-6 mb-4" key={index}>
                                                                            <div className="card h-100">
                                                                                <div className="card-body">
                                                                                    <h4 className="card-title">
                                                                                        <Link to={`/BookEdit/${book.id}`} title="Edit item">{book.titre}</Link>
                                                                                    </h4>
                                                                                    <h5> Auteur : {book.auteur}</h5>
                                                                                    <p className="card-text">Niveau : {book.niveau}</p>
                                                                                    <button className="btn btn-primary" onClick={() => { props.startEditBook(book.id, { idStudent, status }) }}>Remettre</button>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                    </div>

                                                </Tab>
                                                
                                                <Tab eventKey="profile" title="Info Profile">
                                                    <div role="tabpanel" className="tab-pane fade show active">
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
                                                                <p>{props.expense.prenom + " " + props.expense.nom}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Email</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{props.expense.email}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Date de naissance </label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{moment(props.expense.date).format('DD/MM/YYYY')}</p>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>classe </label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{classeFullName[props.expense.classe]}</p>
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

                                               
                                            </Tabs>
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
        startEditBook: (id, book) => dispatch(startEditBook(id, book)),
        startEditPayement: (id, payement) => dispatch(startEditPayement(id, payement))
    }
};


const mapToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id),
        parents: state.parents,
        books: state.books,
        payement: state.payements.find((payement) => payement.idStudent === props.match.params.id)
    }
}


export default connect(mapToProps, mapDispatchToProps)(StudentProfil);