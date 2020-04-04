import React, { useState, useEffect } from 'react';
import { startAddBook } from '../actions/book';
import { connect } from 'react-redux';
import '../App.css'
import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2'

// titre = '',
//     auteur = '',
//     niveau = '',
//     status = '',
//     date = 0

const BookAdd = (props) => {

    const [titre, setTitre] = useState('');
    const [auteur, setAuteur] = useState('');
    const [niveau, setNiveau] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState(new Date())

    const handleAdd = (e) => {
        e.preventDefault();
        const exist_element = props.books.filter((book) => {
            return (book.titre === titre && book.status === status && book.niveau === niveau)
        });

        if (titre && auteur && niveau && status) {
            if (exist_element.length === 0) {
                props.startAddBook({
                    titre,
                    auteur,
                    niveau,
                    status,
                    date: Number(date)
                });
            } else {
                alert("Book already exists");
            }
        } else {
            alert("Please fill the fields");
        }
    };


    const onTitreChange = (e) => {
        const titre = e.target.value;
        setTitre(titre);
    }

    const onAuteurChange = (e) => {
        const auteur = e.target.value;
        setAuteur(auteur);
    }

    const onStatusChange = (e) => {
        const status = e.target.value;
        setStatus(status);
    }

    const onNiveauChange = (e) => {
        const niveau = e.target.value;
        setNiveau(niveau)
    }



    return (
        <div className="AppAdd">
            <form className="styleAdd main-section">
                <h3 className="testTilte">Ajouter Livre</h3>

                <div className="row">
                    <div className="col">
                        <label >Titre :</label>
                        <input type="text" className="form-control" placeholder="Book Name" onChange={onTitreChange} />
                    </div>

                    <div className="col">
                        <label >Auteur :</label>
                        <input type="text" className="form-control" placeholder="Writer Name" onChange={onAuteurChange} defaultValue={props.nom} />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label>Status :</label>
                    <select className="form-control" onChange={onStatusChange}>
                        <option> </option>
                        <option>disponible</option>
                        <option>préparé</option>
                        <option>emprunté</option>
                        <option>rendu</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Niveau :</label>
                    <select className="form-control" onChange={onNiveauChange}>
                        <option> </option>
                        <option>2nde</option>
                        <option>1ere</option>
                        <option>Tnle</option>
                    </select>
                </div>

                <div className="form-group">
                    <label >Date :</label><br />
                    <DatePicker className="form-control"
                        dateFormat="dd/MM/yyyy"
                        selected={date}
                        onChange={date => setDate(date)} />
                </div>

                <div className="row form-group">
                    <div className="col">
                        <button onClick={handleAdd} className="btn btn-primary">Ajouter Livre</button>
                    </div>
                </div>

            </form>
        </div>



    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddBook: (book) => dispatch(startAddBook(book))
    }
};

const mapToProps = (state) => {
    return {
        books: state.books
    }
};

export default connect(mapToProps, mapDispatchToProps)(BookAdd);