import React, { useState } from 'react';
import { startEditStudent, startRemoveStudent } from '../actions/expenses';
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ErrorMessage from './ErrorMessage';

const StudentEdit = (props) => {

  const [id , setId]= useState(props.expense? props.expense.id : '');
  const [nom, setnom] = useState(props.expense ? props.expense.nom : '');
  const [prenom, setPrenom] = useState(props.expense ? props.expense.prenom : '');
  const [classe, setClasse] = useState(props.expense ? props.expense.classe : '');
  const [date, setDate] = useState(props.expense ? new Date(props.expense.date) : new Date());
  const [email, setEmail] = useState(props.expense ? props.expense.email : '');
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  }

  const handleDelete = () => {
    if (nom && prenom && classe)
      props.startRemoveStudent(id)
    scrollToTop();
    props.history.push('/')
  }


  const handleEdit = (e) => {
    e.preventDefault();
    if (nom && prenom && classe) {
      props.startEditStudent(id, {
        nom,
        prenom,
        classe,
        email,
        date: Number(date)
      });
     scrollToTop();
     props.history.goBack()
    } else {
      alert("please fill the fields")
    }
  };

  const handleCancel = (e) => {
    e.preventDefault()
    scrollToTop();
    props.history.goBack()
  }

  const onNomChange = (e) => {
    const nom = e.target.value;
    setnom(nom)
  }

  const onPrenomChange = (e) => {
    const prenom = e.target.value;
    setPrenom(prenom);
  }

  const onClasseChange = (e) => {
    const classe = e.target.value;
    setClasse(classe);
  }

  const onEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  }

  const EditCheck = () => {
    if (!nom) {
      setEditShow(false);
      return <ErrorMessage />
    }
    return null;
  }



  return (
    <div className="AppAdd">
      <EditCheck />
      {editShow &&
        <form className="styleAdd main-section">
          <h5 className="row justify-content-center"> Modification {props.expense.prenom.toUpperCase()} {props.expense.nom.toUpperCase()} </h5>
          <hr/>
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
            <label htmlFor="exampleInputEmail1">Email address :</label>
            <input value={email} onChange={onEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">Nous ne partagerons jamais votre Email avec qui que ce soit.</small>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label >Classe :</label>
                <select value={classe} className="form-control" onChange={onClasseChange}>
                  <option></option>
                  <option>2nde</option>
                  <option>1ere</option>
                  <option>Tnle</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label >Date :</label><br/>
                <DatePicker className="form-control"
                  defaultValue={moment(date).format('MM/DD/YYYY')}
                  dateFormat="dd/MM/yyyy"
                  selected={date}
                  onChange={date => setDate(date)} />
              </div>
            </div>
          </div>
          <br />
          <div className="row form-group">
            <div className="col">
              <button type="submit" onClick={handleEdit} className="btn btn-primary">Modifier Etudiant</button>
            </div>
            <div className="col">
              <button type="submit" onClick={handleDelete} className="btn btn-primary">Supprimer Etudiant</button>
            </div>
            <div className="col">
              <button type="submit" onClick={handleCancel} className="btn btn-primary">Annuler</button>
            </div>
          </div>
        </form>}
    </div>
  )
}



const mapToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    students: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditStudent: (id, expense) => dispatch(startEditStudent(id, expense)),
  startRemoveStudent: (id) => dispatch(startRemoveStudent(id))
});

export default connect(mapToProps, mapDispatchToProps)(StudentEdit);


