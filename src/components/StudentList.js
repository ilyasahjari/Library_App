import React, { useState } from 'react'
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses'
import numeral from '../number'
import { Table } from 'react-bootstrap';
import { startRemoveStudent, removeBook } from '../actions/expenses';
import { Link } from 'react-router-dom'
import '../App.css'
import { setClasseFilter } from '../actions/filters';
import moment from 'moment';
import { CSVLink, CSVDownload } from "react-csv";
import { startEditBook } from '../actions/book';
import ModalDeleteStudent from './ModalDeleteStudent';
import "../table.scss"

export const BookList = (props) => {

    let idStudent = '';
    let status = "disponible";

    const [showDelete, setShowDelete] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const getPayementByStudentID = (id) => {
        const payement = props.payements.find((payement) => payement.idStudent === id);
        return (payement) ? payement.id : null;
    }

    const getBookByStudentID = (id) => {
        const book = props.books.find((book) => book.idStudent === id);
        return (book) ? book.id : null;
    }



    return (
        <div >
            <h1 className="testTilte" style={{ "fontSize": "40px" }}>  </h1>


            <div className="App">
                {/*add filter Component*/}
                {/* Trier par classe
            <select onChange={(e) => { props.dispatch(setClasseFilter(e.target.value)) }}>
                    <option> </option>
                    <option>2nde</option>
                    <option>1ere</option>
                    <option>Tnle</option>
                </select> */}
                <div className="table-users">
                    <div className="header testTilte" style={{ "fontSize": "40px" }}>Liste d'adherents</div>

                    <table cellSpacing="0">
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Classe</th>
                                <th>Date</th>
                                <th>Modifier</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* show each element */}
                            {
                                props.expenses.map((expense) => {
                                    const milToDate = new Date(expense.date)
                                    const date = moment(milToDate).format('DD/MM/YYYY')
                                    return (<tr key={expense.id}>
                                        <td><Link to={`/StudentProfil/${expense.id}`} onClick={scrollToTop} style={{ color: "#00bfff" }} title="Edit item"> {expense.nom}</Link> </td>
                                        <td>{expense.prenom}</td>
                                        <td>{expense.classe}</td>
                                        <td>{date}</td>
                                        <td style={{ textAlign: "center" }}><button className="btn btn-primary" onClick={() => setShowDelete(true)}>Supprimer</button> </td>
                                        <ModalDeleteStudent handleDeleteStudent={() => { props.startRemoveStudent(expense.id); props.startEditBook(getBookByStudentID(expense.id), { idStudent, status }); setShowDelete(false) }} show={showDelete} handleClose={() => setShowDelete(false)} />
                                    </tr>);
                                })
                            }
                        </tbody>

                    </table>

                </div>
                <div style={{ marginLeft: "9%" }}>{props.expenses.length} Users</div>
                <br />

                <CSVLink data={props.expenses} filename={"Liste_etudiants.csv"} separator={";"} enclosingCharacter={`'`}><button className="btn btn-primary">Telecharger CSV</button></CSVLink>
            </div>

            {/* <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 5,
            }}>
            
        </div> */}
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startRemoveStudent: (id) => dispatch(startRemoveStudent(id)),
        startEditBook: (id, expense) => dispatch(startEditBook(id, expense))
    }
};


const mapsToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        books: state.books,
        payements: state.payements
    }
}


export default connect(mapsToProps, mapDispatchToProps)(BookList);