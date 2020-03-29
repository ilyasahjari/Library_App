import React from 'react'
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses'
import numeral from '../number'
import {Table} from 'react-bootstrap';
import { startRemoveStudent , removeBook} from '../actions/expenses';
import { Link } from 'react-router-dom'
import '../App.css'
import moment from 'moment';


export const BookList = (props) => {

    return (
        <div>
            <h1 style={{
                textAlign: "center"
            }}> Afficher Liste d'adherents </h1>
            
           <div style={{
                margin: "50px"
            }}> 
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
                                    <td><Link to= {`/StudentProfil/${expense.id}`} title="Edit item">{expense.prenom}</Link></td> 
                                    <td>{expense.nom}</td>
                                    <td>{expense.classe}</td>
                                    <td>{date}</td>
                                    <td><button className="btn btn-primary" onClick={() => { props.dispatch(startRemoveStudent(expense.id)) }}>Delete</button></td>
                                </tr>);
                        })
                        }
                </tbody>     
                                
            </Table>
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