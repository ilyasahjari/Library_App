import React, { useState } from 'react'
import ParentAdd from './ParentAdd'
import { connect } from 'react-redux'
import ParentAddForm from './ParentAddForm'


const ParentsBoxStudent = (props) => {
    const [nomParent, setNomParent] = useState(props.name ? props.name : "")
    const [prenomParent, setPrenomParent] = useState("")
    const [addParentClick, setAddParentClick] = useState(false)

    function doNothing() {

    }

    const onNomParentChange = (e) => {
        const nom = e.target.value;
        props.setHideNextButton(false);
        setNomParent(nom);
    }


    const onPrenomParentChange = (e) => {
        const prenom = e.target.value;
        props.setHideNextButton(false);
        setPrenomParent(prenom);
    }


    const handleNext = (e) => {
        e.preventDefault();
        const existParent = props.parents.filter((parent) => {
            return (parent.nom === nomParent && parent.prenom === prenomParent)
        });
        //console.log(existParent);
        if (nomParent && prenomParent) {
            if (existParent.length === 0) {
                setAddParentClick(true)
                alert("Parent inexistant !")
            } else {
                props.setHideNextButton(true);
                const searchParent1 = props.parents.filter((parent) =>{
                    return (parent.nom === nomParent && parent.prenom === prenomParent)
                })
                props.handleParentName(searchParent1[0].id);
            }
        }
    }

    const idDataList = "parentSuggestion"
    return (

        <div className="form-group">
            {addParentClick ||
                <div className="row">
                    <div className="col">
                        <label >Nom Parent {props.i}:</label>
                        <input  type="text" className="form-control" placeholder="Nom Parent" onChange={onNomParentChange} />
                    </div>

                    <div className="col">
                        <label >Prenom Parent {props.i} :</label>
                        <input  type="text" className="form-control" placeholder="Prenom Parent" onChange={onPrenomParentChange} list={idDataList+props.i}/>
                        <datalist id={idDataList+props.i}>
                            {
                                props.parents.filter((expense) => {
                                    return (expense.nom.toLowerCase() === nomParent.toLowerCase());
                                })
                                    .map((element, index) => (
                                        <option key={index}>{element.prenom}</option>
                                    ))
                            }
                        </datalist>
                    </div>
                </div>}

            <br/>

            {addParentClick || (props.hideNextButton || <input type="submit" onClick={handleNext} value="Confirmer Parent"/>)}
            {addParentClick && <ParentAdd nom={nomParent} prenom={prenomParent} isClicked={setAddParentClick} handleClick={doNothing} />}

        </div>
    )
}

const mapToProps = (state) => {
    return {
        parents: state.parents
    }
}

export default connect(mapToProps)(ParentsBoxStudent);
