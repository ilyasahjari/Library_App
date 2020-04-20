import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { connect } from 'react-redux'
import { startEditBook } from '../actions/book'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Tabs, Tab } from 'react-bootstrap'
import ModalAddBookStudent from './ModalAddBookStudent'
import Checkbox from '@material-ui/core/Checkbox';
import { startEditPayement } from '../actions/payement'



const StudentProfil = (props) => {
    const [id, setId] = useState(props.expense ? props.expense.id : '');
    const [idParent1, setIdParent1] = useState(props.expense ? props.expense.idParent1 : '');
    const [idParent2, setIdParent2] = useState(props.expense ? props.expense.idParent2 : '');
    const [idStudent, setIdStudent] = useState('');
    const [status, setStatusLivre] = useState('disponible');
    const [showButtonAddLivre, setShowButtonAddLivre] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    //Payements

    const [payementMethod, setPayementMethod] = useState(props.payement ? props.payement.payementMethod : "")
    const [totalPayed, setTotalPayed] = useState(0)
    const [commentaire, setCommentaire] = useState(props.payement ? props.payement.commentaire : "")


    const [elements, setElements] = useState({
        caution: props.payement.caution ? true : false,
        calculatrice: props.payement.calculatrice ? true : false,
        normographe: props.payement.normographe ? true : false,
        cleUSB: props.payement.cleUSB ? true : false,
    })

    const [state, setState] = useState({
        caution: props.payement.caution ? true : false,
        calculatrice: props.payement.calculatrice ? true : false,
        normographe: props.payement.normographe ? true : false,
        cleUSB: props.payement.cleUSB ? true : false,
    });

    const onCommentaireChange =(e)=>{
        const commentaire = e.target.value;
        setCommentaire(commentaire);
    }


    const onPayementMethodChange = (e) => {
        const payementMethod = e.target.value;
        setPayementMethod(payementMethod)
    }

    const [disabled, setDisabled] = useState({
        caution: props.payement.caution ? true : false,
        calculatrice: props.payement.calculatrice ? true : false,
        normographe: props.payement.normographe ? true : false,
        cleUSB: props.payement.cleUSB ? true : false,
    });

    const elementPrice = {
        "caution": 100,
        "calculatrice": 68,
        "normographe": 5,
        "cleUSB": 5
    }

    const classeFullName = {
        "Tnle": "Année Terminal",
        "2nde": "Seconde Année lycée",
        "1ere": "Première Année lycée"
    }

    const handleCheckBox = (e) => {
        setState({ ...state, [e.target.name]: e.target.checked });
        (e.target.checked) ? setTotalPayed(totalPayed + elementPrice[e.target.name]) : setTotalPayed(totalPayed - elementPrice[e.target.name])
    }

    const handleAddPayement = (e) => {
        e.preventDefault()
        props.startEditPayement(props.payement.id, {
            caution: state.caution,
            calculatrice: state.calculatrice,
            normographe: state.normographe,
            cleUSB: state.cleUSB,
            amountPayed: props.payement.amountPayed + totalPayed,
            payementMethod,
            commentaire
        })
        window.location.reload(false);
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
                                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
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
                                                <Tab eventKey="payement" title="Réglement Produit">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col"></th>
                                                                <th scope="col">Nom</th>
                                                                <th scope="col">Prix</th>
                                                                <th scope="col"></th>
                                                                <th scope="col">Payer</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Euro_symbol_black.svg/1019px-Euro_symbol_black.svg.png"  style={{height:"50px"}} alt="normographe" />
                                                                </td>
                                                                <th scope="row">Caution</th>
                                                                <td>100€</td>
                                                                <th />
                                                                <td>
                                                                    <Checkbox checked={state.caution} onChange={handleCheckBox} disabled={disabled.caution} color="primary" name="caution" />
                                                                </td>

                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                   <img src='https://img1.bgxcdn.com/thumb/large/oaupload/banggood/images/06/67/4b263b74-cc1c-45fc-86c2-5de1d97edb65.JPG'  style={{height:"50px"}} alt="calculatrice"/>
                                                                </td>
                                                                <th scope="row">Calculatrice</th>
                                                                  <td>68€</td>
                                                                <td />
                                                                <td>
                                                                  <Checkbox checked={state.calculatrice} onChange={handleCheckBox} disabled={disabled.calculatrice} color="primary" name="calculatrice" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src="https://lh3.googleusercontent.com/proxy/ygQPajlmLBg6DciWqEqcMgNFQHDtr39vWRGPJW9qZkrd_bEDZ9oEUIcfSUQlRC9ksYTLMQyugpwpHbpNAdbcYitQl5myeChSCAB83FPuiP27Sw"  style={{height:"50px"}} alt="normographe" /></td>
                                                                <th scope="row">Normographe</th>
                                                                <td>5€</td>
                                                                <td />
                                                                <td>
                                                                    <Checkbox checked={state.normographe} onChange={handleCheckBox} disabled={disabled.normographe} color="primary" name="normographe" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src="https://www.cdiscount.com/pdt2/7/3/6/1/300x300/tem6427643888736/rw/256go-cle-usb-3-0-stick-rotatif-pendrive-memoire-f.jpg" style={{height:"50px"}}  alt="cleUSB" /></td>
                                                                <th scope="row">Clé USB</th>
                                                                <td>5€</td>
                                                                <td />
                                                                <td>
                                                                    <Checkbox checked={state.cleUSB} onChange={handleCheckBox} disabled={disabled.cleUSB} color="primary" name="cleUSB" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td />
                                                                <th>
                                                                    TOTAL A PAYÉ
                                                                </th>
                                                                <th>
                                                                    {totalPayed}
                                                                </th>
                                                                <td>
                                                                    <select className="form-control" onChange={onPayementMethodChange} defaultValue={payementMethod}>

                                                                        <option value="" disabled hidden>Methode de payement</option>
                                                                        <option>CB</option>
                                                                        <option>Cheque</option>
                                                                        <option>HDF</option>
                                                                        <option>espece</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-primary" onClick={handleAddPayement}>Payer</button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    Commentaire:
                                                                </th>
                                                                <td>
                                                                  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={onCommentaireChange} defaultValue={commentaire} rows="1"></textarea>
                                                                </td>
                                                                <td />
                                                                <th>
                                                                    MONTANT PAYÉ
                                                                </th>
                                                                <th>
                                                                    {props.payement.amountPayed}
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    
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