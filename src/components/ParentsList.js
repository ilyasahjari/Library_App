import React, { useState } from 'react'
import { connect } from 'react-redux';
import numeral from '../number'
import { Table } from 'react-bootstrap';
import { startRemoveParent } from '../actions/parent';
import { Link } from 'react-router-dom'
import '../App.css'
import moment from 'moment';
import getVisibleParents from "../selectors/parents"
import { setSexeFilterParent } from "../actions/parent-filter"
import { CSVLink, CSVDownload } from "react-csv";
import { CSVReader } from 'react-papaparse'
import SideBar from './SideBar';



export const ParentsList = (props) => {
    const [classeFilter, setClasseFilter] = useState(' ');

    const onChangeClassFiltre = (e) => {
        const classeFilter = e.target.value;
        setClasseFilter(classeFilter);
        props.dispatch(setSexeFilterParent(classeFilter));

    }
    const handleOnDrop = (data) => {
        console.log('--------------------------------------------------')
        console.log(data)
        console.log('--------------------------------------------------')
    }
    const handleOnError = (err) => {
        console.log(err)
    }

    const headerCSV = [
        { label: "ID Parent", key: "id" },
        { label: "Nom Parent", key: "nom" },
        { label: "Numero de telephone", key: "phoneNum" },
        { label: "Prenom Parent", key: "prenom" },
        { label: "SEXE", key: "sexe" }
    ];

    return (
        <div>
            <h1 style={{
                textAlign: "center"
            }}> Afficher Liste de Parents </h1>


            <div className="App">
                {/*add filter Component*/}
            Trier par classe
            <select defaultValue=' ' onChange={onChangeClassFiltre} >
                    <option value=''> </option>
                    <option>M</option>
                    <option>F</option>
                </select>
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
                <CSVLink data={props.parents} filename={"Liste_parents.csv"} separator={";"} enclosingCharacter={`'`} headers={headerCSV}><button className="btn btn-primary">Telecharger CSV</button></CSVLink>

                <CSVReader
                    onDrop={handleOnDrop}
                    onError={handleOnError}
                >
                    <span>Drop CSV file here or click to upload.</span>
                </CSVReader>
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
        parents: getVisibleParents(state.parents, state.parentfilters),
        filtersParent: state.parentfilters
    }
}


export default connect(mapsToProps)(ParentsList);