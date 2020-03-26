import React, { useState } from 'react';
import { startEditStudent, startRemoveStudent } from '../actions/expenses';
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ErrorMessage from './ErrorMessage';

const StudentEdit = (props) => {

  const [nom, setnom] = useState(props.expense ? props.expense.nom : '');
  const [prenom, setPrenom] = useState(props.expense ? props.expense.prenom : '');
  const [classe, setClasse] = useState(props.expense ? props.expense.classe : '');
  const [date, setDate] = useState(props.expense ? new Date(props.expense.date) : new Date());
  const [editShow, setEditShow] = useState(true)

  // to connect with spring for next uses !!s
  // useEffect(() => {
  //   const id = props.match.params.id;
  //   getUserById(id);
  // }, []);
  // const getUserById = () => {
  //   axios.get("http://localhost:8080/Adherents/${id}")
  //     .then(d => {
  //       console.log(d)
  //     })
  //     .catch(err => alert(err));
  // }

  const handleDelete = () => {
    if (nom && prenom && classe)
      props.startRemoveStudent(props.expense.id)
    props.history.push('/')
  }

  const handleEdit = (e) => {
    e.preventDefault();
    if (nom && prenom && classe) {
      props.startEditStudent(props.expense.id, {
        nom,
        prenom,
        classe,
        date: Number(date)
      });
      props.history.push('/')
    } else {
      alert("please fill the fields")
      props.history.push('/')
    }
  };

  const onNomChange = (e) => {
    const nom = e.target.value;
    setnom(nom)
  }

  const onPrenomChange = (e) => {
    const prenom = e.target.value;
    setPrenom(prenom);
  }

  const onClasseChange = (e) => {
    const classe = e.target.value
    setClasse(classe)
  }

  const EditCheck =()=> {
    if(!nom){
      setEditShow(false);
      return <ErrorMessage/>
    }
      return null;
  }
 


  return (
    
     <div>
       <EditCheck/>
       {editShow &&
      <form className="styleAdd" onSubmit={handleEdit}>
        <h5 className="row justify-content-center"> Modification {prenom.toUpperCase()} {nom.toUpperCase()} </h5>
        <br/>
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
          <label >Classe</label>
          <select value={classe} className="form-control" onChange={onClasseChange}>
            <option></option>
            <option>2nde</option>
            <option>1ere</option>
            <option>Tnle</option>
          </select>
        </div>
        <div className="form-group">
          <label >Date</label><br />
          <DatePicker className="form-control"
            defaultValue={moment(date).format('MM/DD/YYYY')}
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={date => setDate(date)} />
        </div>
        <br />
        <div className="row">
          <div className="col">
            <button type="submit" onClick={handleEdit} className="btn btn-primary">Modifier Etudiant</button>
          </div>
          <div className="col-8">
            <button type="submit" onClick={handleDelete} className="btn btn-primary">Supprimer Etudiant</button>
          </div>
        </div>
      </form>}
    </div>
  )
}



const mapToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditStudent: (id, expense) => dispatch(startEditStudent(id, expense)),
  startRemoveStudent: (data) => dispatch(startRemoveStudent(data))
});

export default connect(mapToProps, mapDispatchToProps)(StudentEdit);


