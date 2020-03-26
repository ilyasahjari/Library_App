import React, { useState, useEffect } from 'react';
import { startAddParent, startSetParents } from '../actions/parent';
import { connect } from 'react-redux';
import '../App.css'
const ParentAdd = (props) => {

    const [nom, setNom] = useState(props.nom ? props.nom : '');
    const [prenom, setPrenom] = useState(props.prenom ? props.prenom : '');
    const [sexe, setSexe] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        const exist_element = props.parents.filter((parent) => {
            return (parent.nom === props.nom && parent.prenom === prenom)
        });

        if (nom && prenom && sexe) {
            if (exist_element.length === 0) {
                props.startAddParent({
                    nom,
                    prenom,
                    sexe
                });
                props.isClicked(false)
                //to return to the main page for the add parent page
                // props.history.push('/'); 
                props.handleClick();

            } else {
                alert("Name already exists");
            }
        } else {
            alert("Please fill the fields");
        }
    };

    const handleHideForm = (e) => {
        e.preventDefault()
        props.isClicked(false)
    }

    const onNomChange = (e) => {
        const nom = e.target.value;
        setNom(nom);
        
    }

    const onPrenomChange = (e) => {
        const prenom = e.target.value;
        setPrenom(prenom);
    }

    const onSexeChange = (e) => {
        const sexe = e.target.value;
        setSexe(sexe);
    }


    return (
        <div>
            <div>
            <h3 className="testTilte">Ajouter Parent</h3>
                <br />
                <div className="row">
                    <div className="col">
                        <label >Prenom :</label>
                        <input type="text" className="form-control" placeholder="First name" onChange={onPrenomChange} defaultValue={props.prenom} />
                    </div>

                    <div className="col">
                        <label >Nom :</label>
                        <input type="text" className="form-control" placeholder="Last name" onChange={onNomChange} defaultValue={props.nom} />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label>Sexe :</label>
                    <select className="form-control" onChange={onSexeChange}>
                        <option value> </option>
                        <option>M</option>
                        <option>F</option>
                        <option>Autre</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col">
                        <button onClick={handleAdd} className="btn btn-primary">Ajouter Parent</button>
                    </div>
                    <div className="col-8">
                        <button onClick={handleHideForm} className="btn btn-primary">Annuler</button>
                    </div>

                </div>

            </div>
        </div>



    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddParent: (parent) => dispatch(startAddParent(parent))
    }
};

const mapToProps = (state) => {
    return {
        parents: state.parents
    }
};

export default connect(mapToProps, mapDispatchToProps)(ParentAdd);