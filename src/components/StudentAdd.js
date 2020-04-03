import React, { useState, useEffect } from 'react';
import { startAddStudent, addBook, startSetExpenses } from '../actions/expenses';
import ParentsBoxStudent from './ParentBoxStudent'
import ParentAdd from './ParentAdd'
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getVisibleExpenses from '../selectors/expenses';
import axios from "axios";

const BookAdd = (props) => {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [classe, setClasse] = useState('');
    const [date, setDate] = useState(new Date());
    const [email, setEmail] = useState('');
    const [idParent1, setIdParent1] = useState('');
    const [idParent2, setIdParent2] = useState('');


    const [hideNextButton1, setHideNextButton1] = useState(false)
    const [hideNextButton2, setHideNextButton2] = useState(false)



    const handleAdd = (e) => {
        e.preventDefault();
        const exist_element = props.expenses.filter((expense) => {
            return (expense.nom === nom && expense.prenom === prenom)
        });
        const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        if (nom && prenom && classe && emailValid) {
            if (exist_element.length === 0) {
                props.startAddStudent({
                    nom,
                    prenom,
                    classe,
                    date: Number(date),
                    email,
                    idParent1,
                    idParent2
                });
                props.history.push('/');

            } else {
                alert("Name already exists");
            }
        } else {
            alert(emailValid ? "Veuillez remplir les champs necessaire" : "Veuillez saisir un Mail Valide");
        }
    };

    const onNomChange = (e) => {
        const nom = e.target.value;
        setNom(nom);
    }

    const onPrenomChange = (e) => {
        const prenom = e.target.value;
        setPrenom(prenom);
    }

    const onClasseChange = (e) => {
        const classe = e.target.value;
        setClasse(classe);
    }

    const onEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const parentsChecked = () => {
        return (hideNextButton1 && hideNextButton2);
    }

    const handlParentName1 = (id) => {
        setIdParent1(id)
    }


    const handleParentName2 = (id) => {
        setIdParent2(id)
    }

    let iterator = 1;
    return (

        <div>

            <form className="styleAdd main-section">
                <h3 className="testTilte">Ajouter Etudiant</h3>
                <br />
                <div className="row">
                    <div className="col">
                        <label >Prenom :</label>
                        <input type="text" className="form-control" placeholder="First name" autoFocus onChange={onPrenomChange} />
                    </div>

                    <div className="col">
                        <label >Nom :</label>
                        <input type="text" className="form-control" placeholder="Last name" onChange={onNomChange} />
                    </div>

                </div>
                <br />
                <div className="form-group">
                    <label >Classe :</label>
                    <select className="form-control" onChange={onClasseChange}>
                        <option > </option>
                        <option>2nde</option>
                        <option>1ere</option>
                        <option>Tnle</option>
                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address :</label>
                    <input onChange={onEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">Nous ne partagerons jamais votre Email avec qui que ce soit.</small>
                </div>

                <div className="form-group">
                    <label >Date :</label><br />
                    <DatePicker className="form-control"
                        dateFormat="dd/MM/yyyy"
                        selected={date}
                        onChange={date => setDate(date)} />

                </div>

                <ParentsBoxStudent i={iterator++} hideNextButton={hideNextButton1} setHideNextButton={setHideNextButton1} handleParentName={handlParentName1} />

                <br />

                <ParentsBoxStudent i={iterator++} hideNextButton={hideNextButton2} setHideNextButton={setHideNextButton2} handleParentName={handleParentName2} />
                {parentsChecked() && <button type="submit" onClick={handleAdd} className="btn btn-primary">Inscription</button>}

            </form>


        </div>



    )

}


const mapDispatchToProps = (dispatch) => {
    return {
        startAddStudent: (expense) => dispatch(startAddStudent(expense))
    }
};

const mapToProps = (state) => {
    return {
        expenses: state.expenses,
        parents: state.parents
    }
};



export default connect(mapToProps, mapDispatchToProps)(BookAdd);
