import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const StudentProfil = (props) => {
    const [id, setId] = useState(props.expense ? props.expense.id : '');
    const [nom, setnom] = useState(props.expense ? props.expense.nom : '');
    const [prenom, setPrenom] = useState(props.expense ? props.expense.prenom : '');
    const [classe, setClasse] = useState(props.expense ? props.expense.classe : '');
    const [date, setDate] = useState(props.expense ? new Date(props.expense.date) : new Date());
    const [email, setEmail] = useState(props.expense ? props.expense.email : '');
    const classeFullName ={
        "Tnle":"Année Terminal",
        "2nde":"Seconde Année lycée",
        "1ere":"Première Année lycée"
    }
    

    return (
        <div>
            <div className="container main-section">
                <div className="row">

                    <div className="row user-left-part">
                        <div className="col-md col-sm-3 col-xs-12 user-profil-part pull-left">
                            
                        </div>
                        <div className="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section">
                            <div className="row profile-right-section-row">
                                <div className="col-md-8 profile-header">
                                    <div className="row">
                                        <div className="col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left">
                                            <h3>{prenom} {nom}</h3>
                                            <h5>Etudiant</h5>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-6 profile-header-section1 text-right pull-rigth">
                                            <Link to={`/edit/${id}`} title="Edit item"><button className="btn btn-primary">Modifier</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" role="tab" data-toggle="tab"><i className="fas fa-user-circle"></i> Info Profile</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" role="tab" data-toggle="tab"><i className="fas fa-info-circle"></i> Réglement Produit</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" role="tab" data-toggle="tab"><i className="fas fa-user-circle"></i> Livres empruntés</a>
                                                </li>

                                            </ul>

                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane fade show active" id="profile">
                                                    <br/>
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
                                                            <p>{moment(date).format('MM/DD/YYYY')}</p>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <label>Classe </label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{classeFullName[classe]}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="buzz">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Experience</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Expert</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Hourly Rate</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>10$/hr</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Total Projects</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>230</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>English Level</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Expert</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Availability</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>6 months</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <label>Your Bio</label>
                                                            <br />
                                                            <p>Your detail description</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

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

const mapToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}


export default connect(mapToProps)(StudentProfil);