import React from 'react'
import { connect } from 'react-redux';
import numeral from '../number'
import { Table } from 'react-bootstrap';
import { startRemoveParent } from '../actions/parent';
import { Link } from 'react-router-dom'
import '../App.css'
import moment from 'moment';
import getVisibleParents from "../selectors/parents"
import { setSexeFilterParent } from "../actions/parent-filter"


export const ParentsList = (props) => {

    return (
        <div>
            <h1 style={{
                textAlign: "center"
            }}> Afficher Liste de Parents </h1>
            {/*add filter Component*/}
            Trier par classe   
            <select onChange={(e) => { props.dispatch(setSexeFilterParent(e.target.value))}}>
                <option> </option>
                <option>M</option>
                <option>F</option>
            </select>

            <div style={{
                margin: "50px"
            }}>
                <Table className="mt-4" striped bordered hover size="sm" responsive="sm">
                    <caption>{props.parents.length} Parents</caption>
                    <thead className="thead-light">
                        <tr>
                            <th>Prenom</th>
                            <th>Nom</th>
                            <th>Sexe</th>
                            <th>Numéro téléphone</th>
                            <th>Modifier</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* show each element */}
                        {
                            props.parents.map((parent) => {
                                return (<tr key={parent.id}>
                                    <td><Link to={`/ParentEdit/${parent.id}`} title="Edit item">{parent.prenom}</Link></td>
                                    <td>{parent.nom}</td>
                                    <td>{parent.sexe}</td>
                                    <td>{parent.phoneNum}</td>
                                    <td><button className="btn btn-primary" onClick={() => { props.dispatch(startRemoveParent(parent.id)) }}>Delete</button></td>
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
        parents: getVisibleParents(state.parents, state.parentfilters)
    }
}


export default connect(mapsToProps)(ParentsList);