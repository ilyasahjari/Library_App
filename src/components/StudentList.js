import React from 'react'
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


export const BookList = (props) => {

    return (
        <div >
            <h1 style={{
                textAlign: "center"
            }}> Afficher Liste d'adherents </h1>


            <div className="App">
                {/*add filter Component*/}
            Trier par classe
            <select onChange={(e) => { props.dispatch(setClasseFilter(e.target.value)) }}>
                    <option> </option>
                    <option>2nde</option>
                    <option>1ere</option>
                    <option>Tnle</option>
                </select>
                <Table className="mt-4" striped bordered hover size="sm" responsive="sm">
                    <caption>{props.expenses.length} Users</caption>
                    <thead className="thead-light">
                        <tr>
                            <th>Prenom</th>
                            <th>Nom</th>
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
                                    <td><Link to={`/StudentProfil/${expense.id}`} title="Edit item">{expense.prenom}</Link></td>
                                    <td>{expense.nom}</td>
                                    <td>{expense.classe}</td>
                                    <td>{date}</td>
                                    <td><button className="btn btn-primary" onClick={() => { props.dispatch(startRemoveStudent(expense.id)) }}>Delete</button></td>
                                </tr>);
                            })
                        }
                    </tbody>

                </Table>
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

const mapsToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}


export default connect(mapsToProps)(BookList);