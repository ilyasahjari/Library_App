import React from 'react'
import {connect} from 'react-redux'
 

const ParentAttributes = (props) => {


    return (
        <div className="row">
            <div className="col">
                <label >Prenom Parent {props.i} :</label>
                <input type="text" className="form-control" list="parent-suggestion" onChange={onPrenomParentChange} placeholder="first name" />
                <datalist id="parent-suggestion">
                    {
                        props.parents.filter((expense) => {
                            return (expense.nom.toLowerCase() === props.nom.toLowerCase());
                        })
                            .map((element, index) => (
                                <option key={index}>{element.prenom}</option>
                            ))
                    }
                </datalist>
            </div>

            <div className="col">
                <label >Nom Parent {props.i}:</label>
                <input type="text" className="form-control" placeholder="Last name" onChange={onNomParentChange} defaultValue={props.nom} />
            </div>
        </div>
    )
}

const mapToProps = (state) =>{
    return{
        parents: state.parents
    }
}

export default connect(mapToProps)(ParentsAttributes)



