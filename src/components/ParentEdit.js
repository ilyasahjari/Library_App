import React, { useState } from 'react';
import { startEditParent, startRemoveParent } from '../actions/parent';
import { connect } from 'react-redux';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import ErrorMessage from './ErrorMessage';


const ParentEdit = (props) => {
    const [nom, setNom] = useState(props.parent ? props.parent.nom : '');
    const [prenom, setPrenom] = useState(props.parent ? props.parent.prenom : '');
    const [sexe, setSexe] = useState(props.parent ? props.parent.sexe : '');
    const [phoneNum, setPhoneNum] = useState(props.parent ? props.parent.phoneNum : '');

    const handleEdit = (e) => {
        e.preventDefault();
        if (nom && prenom && sexe) {
            props.startEditParent(props.parent.id, {
                nom,
                prenom,
                sexe,
                phoneNum
            });
            props.history.push('../ParentsList')
        } else {
            alert("please fill the fields")
        }
    };

    const handleDelete = (e) =>{
        e.preventDefault();
        props.startRemoveParent(props.parent.id) 
        props.history.push('../ParentsList')      
    }

    const onNomChange = (e) => {
        const nom = e.target.value;
        setNom(nom)
    }

    const onPrenomChange = (e) => {
        const prenom = e.target.value;
        setPrenom(prenom);
    }

    const onSexeChange = (e) => {
        const sexe = e.target.value;
        setSexe(sexe);
    }

    const onPhoneNumChange = () => {
        setPhoneNum(phoneNum);
    }

    return (
        <div className="AppAdd">
            <form className="styleAdd main-section">
                <h5 className="row justify-content-center"> Modification {prenom.toUpperCase()} {nom.toUpperCase()} </h5>
                <hr />
                <div className="row">
                    <div className="col">
                        <label >Prenom :</label>
                        <input type="text" value={prenom} className="form-control" placeholder="First name" autoFocus onChange={onPrenomChange} />
                    </div>

                    <div className="col">
                        <label >Nom :</label>
                        <input type="text" value={nom} className="form-control" placeholder="Last name" onChange={onNomChange} />
                    </div>
                </div>
                <br />

                <div className="form-group">
                    <label >Sexe :</label>
                    <select value={sexe} className="form-control" onChange={onSexeChange}>
                        <option></option>
                        <option>F</option>
                        <option>M</option>
                        <option>Autre</option>
                    </select>
                </div>
                <div className="form-group ">
                    <label >Numéro de téléphone :</label>
                    <PhoneInput country={'fr'} value={phoneNum} onChange={setPhoneNum} />
                </div>
                <br />
                <div className="row form-group">
                    <div className="col">
                        <button type="submit" onClick={handleEdit} className="btn btn-primary">Modifier Parent</button>
                    </div>
                    <div className="col">
                        <button type="submit" onClick={handleDelete} className="btn btn-primary">Supprimer Parent</button>
                    </div>
                </div>
            </form>
        </div>

    )

}

const mapToProps = (state, props) => {
    return {
      parent: state.parents.find((parent) => parent.id === props.match.params.id)
    }
}

const mapDispatchProps = (dispatch) =>{
    return {
        startEditParent: (id, parent) => dispatch(startEditParent(id, parent)),
        startRemoveParent: (payload) => dispatch(startRemoveParent(payload))
    }
}

export default connect(mapToProps,mapDispatchProps)(ParentEdit);
