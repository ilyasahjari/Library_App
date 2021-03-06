import React, { useState } from 'react';
import { startEditParent, startRemoveParent } from '../../actions/parent';
import { connect } from 'react-redux';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import ErrorMessage from '../ErrorMessage';


const ParentEdit = (props) => {
    const [nom, setNom] = useState(props.parent ? props.parent.nom : '');
    const [prenom, setPrenom] = useState(props.parent ? props.parent.prenom : '');
    const [sexe, setSexe] = useState(props.parent ? props.parent.sexe : '');
    const [phoneNum, setPhoneNum] = useState(props.parent ? props.parent.phoneNum : '');

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    const handleCancel = (e) =>{
        e.preventDefault();
        scrollToTop();
        props.history.push('../ParentsList')
    }

    const handleEdit = (e) => {
        e.preventDefault();
        if (nom && prenom && sexe) {
            props.startEditParent(props.parent.id, {
                nom,
                prenom,
                sexe,
                phoneNum
            });
            scrollToTop();
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

    const headerStyle ={
        backgroundColor:  "white",
        fontSize: "1.5em",
        padding: "1rem",
        textAlign: "center",
        textTransform: "uppercase"
    }

    return (
        <div className="AppAdd">
            <form className="styleAdd main-section">
                <div style={headerStyle} > Modification {props.parent.prenom.toUpperCase()} {props.parent.nom.toUpperCase()} </div>
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
                    <label >Sexe :</label><br/>
                    <select value={sexe} className="select" onChange={onSexeChange}>
                        <option></option>
                        <option>F</option>
                        <option>M</option>
                        <option>Autre</option>
                    </select>
                </div>
                <div className="form-group ">
                    <label >Numéro de téléphone :</label>
                    <PhoneInput country={'fr'} style={{width:"92%"}} value={phoneNum} onChange={setPhoneNum} />
                </div>
                <br />
                <div className="row form-group">
                    <div className="col">
                        <button type="submit" onClick={handleEdit} className="btn btn-primary">Modifier Parent</button>
                    </div>
                    <div className="col">
                        <button type="submit" onClick={handleDelete} className="btn btn-primary">Supprimer Parent</button>
                    </div>
                    <div className="col">
                        <button type="submit" onClick={handleCancel} className="btn btn-primary">Annuler</button>
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
