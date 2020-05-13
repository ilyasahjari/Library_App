import React, { useState, useEffect } from 'react'
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
import { setTextFiltertParent } from '../actions/parent-filter'



export const ParentsList = (props) => {

    const [classeFilter, setClasseFilter] = useState(' ');

    const onChangeClassFiltre = (e) => {
        const classeFilter = e.target.value;
        setClasseFilter(classeFilter);
        props.setSexeFilterParent(classeFilter);

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
            <div className="App fadeIn">
                {/*add filter Component*/}
                <div className="header" style={{ "fontSize": "40px" ,backgroundColor: "grey"}}>Liste Parents</div>

                <table cellSpacing="0">
                    <caption style={{color: "white"}}>{props.parents.length} Parents</caption>
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
                                    <td><Link to={`/ParentEdit/${parent.id}`} style={{ color: "#00bfff" }} title="Edit item">{parent.prenom}</Link></td>
                                    <td>{parent.nom}</td>
                                    <td>{parent.sexe}</td>
                                    <td>{parent.phoneNum}</td>
                                    <td><button className="btn btn-primary" onClick={() => { props.dispatch(startRemoveParent(parent.id)) }}>Delete</button></td>
                                </tr>);
                            })
                        }
                    </tbody>

                </table>
                <CSVLink  style={{marginBottom:"50px"}} data={props.parents} filename={"Liste_parents.csv"} separator={";"} enclosingCharacter={`'`} headers={headerCSV}><button className="btn btn-primary">Telecharger CSV</button></CSVLink>
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

const mapDispatchProps = (dispatch) =>{
    return {
        setTextFiltertParent: () => dispatch(setTextFiltertParent("")),
        setSexeFilterParent :(element)=>dispatch(setSexeFilterParent(element))
    }
}

const mapsToProps = (state) => {
    return {
        parents: getVisibleParents(state.parents, state.parentfilters),
        filtersParent: state.parentfilters
    }
}


export default connect(mapsToProps,mapDispatchProps)(ParentsList);