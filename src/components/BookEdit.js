import React, { useState } from 'react';
import { startEditBook, startRemoveBook } from '../actions/book';
import { connect } from 'react-redux';
import '../App.css'
import DatePicker from "react-datepicker";

// titre = '',
//     auteur = '',
//     niveau = '',
//     status = '',
//     date = 0

const BookEdit = (props) => {

    const [titre, setTitre] = useState(props.book ? props.book.titre : '');
    const [auteur, setAuteur] = useState(props.book ? props.book.auteur : '');
    const [niveau, setNiveau] = useState(props.book ? props.book.niveau : '');
    const [status, setStatus] = useState(props.book ? props.book.status : '');
    const [date, setDate] = useState(props.book ? props.book.date : new Date())


    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    const handleCancel = (e)=>{
        e.preventDefault();
        props.history.goBack()
        scrollToTop();
    }

    const handleEdit = (e) => {
        e.preventDefault();

        if (titre && auteur && niveau && status) {
            props.startEditBook(props.book.id,
                {
                    titre,
                    auteur,
                    niveau,
                    status,
                    date: Number(date),
                });
            props.history.goBack()
            scrollToTop();

        } else {
            alert('Please fill the empty fields')
        }

    };

    const handleDelete = (e) =>{
        e.preventDefault();
        props.startRemoveBook(props.book.id);
        props.history.goBack()
        scrollToTop();

    }


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

    // const onNomStudentChange = (e) => {
    //     const nom = e.target.value;
    //     setNomStudent(nom);
    // }


    // const onPrenomStudentChange = (e) => {
    //     const prenom = e.target.value;
    //     setPrenomStudent(prenom);
    // }

    return (
        <div className="AppAdd">
            <form className="styleAdd main-section">
                <h3 className="testTilte">Modification Livre {props.book.titre}</h3>

                <div className="row">
                    <div className="col">
                        <label >Titre :</label>
                        <input type="text" className="form-control" placeholder="Book Name" onChange={onTitreChange} value={titre} />
                    </div>

                    <div className="col">
                        <label >Auteur :</label>
                        <input type="text" className="form-control" placeholder="Writer Name" onChange={onAuteurChange} value={auteur} />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label>Status :</label>
                    <select className="form-control" onChange={onStatusChange} value={status}>
                        <option> </option>
                        <option>disponible</option>
                        <option>préparé</option>
                        <option>emprunté</option>
                        <option>rendu</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Niveau :</label>
                    <select className="form-control" value={niveau} onChange={onNiveauChange}>
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
                        onChange={date => setDate(date)}
                        value={date} />
                </div>

                <div className="row form-group">
                    <div className="col">
                        <button onClick={handleEdit} className="btn btn-primary">Modifier Livre</button>
                    </div>
                    <div className="col">
                        <button onClick={handleDelete} className="btn btn-primary">Supprimer Livre</button>
                    </div>
                    <div className="col">
                        <button onClick={handleCancel} className="btn btn-primary">Annuler</button>
                    </div>
                    
                </div>

            </form>
        </div>



    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditBook: (id, book) => dispatch(startEditBook(id, book)),
        startRemoveBook: (id) => dispatch(startRemoveBook(id))
    }
};

const mapToProps = (state, props) => {
    return {
        book: state.books.find((book) => book.id === props.match.params.id)
    }
};

export default connect(mapToProps, mapDispatchToProps)(BookEdit);