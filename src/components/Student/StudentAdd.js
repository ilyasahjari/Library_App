import React, { useState, useEffect } from 'react';
import { startAddStudent, addBook, startSetExpenses } from '../../actions/expenses';
import ParentsBoxStudent from '../Parent/ParentBoxStudent'
import ParentAdd from '../Parent/ParentAdd'
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getVisibleExpenses from '../../selectors/expenses';
import axios from "axios";

const BookAdd = (props) => {

    let idStudent =""
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [classe, setClasse] = useState('');
    const [date, setDate] = useState(new Date());
    const [email, setEmail] = useState('');
    const [idParent1, setIdParent1] = useState('');
    const [idParent2, setIdParent2] = useState('');


    const [hideNextButton1, setHideNextButton1] = useState(false)
    const [hideNextButton2, setHideNextButton2] = useState(false)

    const headerStyle ={
        backgroundColor:  "white",
        fontSize: "1.5em",
        padding: "1rem",
        textAlign: "center",
        textTransform: "uppercase"
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }    

    

    const handleAdd = (e) => {
        e.preventDefault();
        const exist_element = props.expenses.filter((expense) => {
            return (expense.nom === nom && expense.prenom === prenom)
        });
        const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        if (nom && prenom) {
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
                scrollToTop();
                props.history.push(`/`);
            } else {
                alert("Student already exists");
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

        <div className="AppAdd">

            <form className="styleAdd main-section">
            <div style={headerStyle}>Ajouter Etudiant</div>
                <hr/>
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
                    <label >Classe :</label><br/>
                    <select className="select" onChange={onClasseChange}>
                        <option > </option>
                        <option>2nde</option>
                        <option>1ere</option>
                        <option>Tnle</option>
                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address :</label><br/>
                    <input onChange={onEmailChange} type="text" style={{width:"700px"}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer email" />
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
                <div className="form-group">
                {parentsChecked() && <input type="submit" onClick={handleAdd} value="Inscription"/>}
                </div>
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
