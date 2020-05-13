import React, { useState } from 'react';
import { startAddBook } from '../actions/book';
import { connect } from 'react-redux';
import '../App.css'
import DatePicker from "react-datepicker";

// titre = '',
//     auteur = '',
//     niveau = '',
//     status = '',
//     date = 0

const BookAdd = (props) => {

    const [titre, setTitre] = useState('');
    const [auteur, setAuteur] = useState('');
    const [niveau, setNiveau] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState(new Date())
    const [nomStudent, setNomStudent] = useState('');
    const [prenomStudent, setPrenomStudent] = useState('');
    let idStudent='';
    const [onChangeNiveau, setOnChangeNiveau] = useState(false);


    const handleCancel = (e)=>{
        e.preventDefault();
        scrollToTop();
        props.history.push('../BookList')
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    const handleAdd = (e) => {
        e.preventDefault();
        const exist_element = props.books.filter((book) => {
            return (book.titre === titre && book.status === status && book.niveau === niveau)
        });

        
        
        const checkValue = () => {
            if (status === "emprunté" || status === "préparé") {
                const exist_student = props.students.filter((student) => {
                    return (student.nom === nomStudent && student.prenom === prenomStudent)
                });
                if (exist_student.length !== 0) {
                    idStudent=exist_student[0].id;
                    return true;
                }
                else
                    return false;
            }
            return true;
        }


        if (titre && auteur && niveau && status){
            if (checkValue()){
                if (exist_element.length === 0){
                    props.startAddBook({
                        titre,
                        auteur,
                        niveau,
                        status,
                        date: Number(date),
                        idStudent
                    });
                    scrollToTop();
                    props.history.push('../BookList')
                }else{
                    alert('book already exist')
                }
            }else{
                alert('Student don\'t exist');
            }
        }else{
            alert('Please fill the empty fields')
        }
     
    };

    const headerStyle ={
        backgroundColor:  "white",
        fontSize: "1.5em",
        padding: "1rem",
        textAlign: "center",
        textTransform: "uppercase"
    }

const onTitreChange = (e) => {
    const titre = e.target.value;
    setTitre(titre);
}

const onAuteurChange = (e) => {
    const auteur = e.target.value;
    setAuteur(auteur);
}

const onStatusChange = (e) => {
    const status = e.target.value;
    (status === "emprunté" || status === "préparé") ? setOnChangeNiveau(true) : setOnChangeNiveau(false);
    setStatus(status);
}

const onNiveauChange = (e) => {
    const niveau = e.target.value;
    setNiveau(niveau)
}

const onNomStudentChange = (e) => {
    const nom = e.target.value;
    setNomStudent(nom);
}


const onPrenomStudentChange = (e) => {
    const prenom = e.target.value;
    setPrenomStudent(prenom);
}

return (
    <div className="AppAdd">
        <form className="styleAdd main-section">
        <div style={headerStyle}>Ajouter Livre</div>
            <hr/>
            <div className="row">
                <div className="col">
                    <label >Titre :</label>
                    <input type="text" className="form-control" placeholder="Book Name" onChange={onTitreChange} autoFocus />
                </div>

                <div className="col">
                    <label >Auteur :</label>
                    <input type="text" className="form-control" placeholder="Writer Name" onChange={onAuteurChange} defaultValue={props.nom} />
                </div>
            </div>
            <br />
            <div className="form-group">
                <label>Status :</label><br/>
                <select className="select" onChange={onStatusChange}>
                    <option> </option>
                    <option>disponible</option>
                    <option>préparé</option>
                    <option>emprunté</option>
                    <option>rendu</option>
                </select>
            </div>
            {onChangeNiveau &&
                <div className="row form-group">
                    <div className="col">
                        <label >Nom Etudiant :</label>
                        <input type="text" placeholder="Nom Etudiant" onChange={onNomStudentChange} />
                    </div>

                    <div className="col">
                        <label >Prenom Parent :</label>
                        <input type="text" placeholder="Prenom Etudiant" onChange={onPrenomStudentChange} list={"idDataList"} />
                        <datalist id={"idDataList"}>
                            {
                                props.students.filter((expense) => {
                                    return (expense.nom.toLowerCase() === nomStudent.toLowerCase());
                                })
                                    .map((element, index) => (
                                        <option key={index}>{element.prenom}</option>
                                    ))
                            }
                        </datalist>
                    </div>
                </div>
            }
            <div className="form-group">
                <label>Niveau :</label>
                <select className="select" onChange={onNiveauChange}>
                    <option> </option>
                    <option>2nde</option>
                    <option>1ere</option>
                    <option>Tnle</option>
                </select>
            </div>

            <div className="form-group">
                <label >Date :</label><br />
                <DatePicker className="form-control"
                    dateFormat="dd/MM/yyyy"
                    selected={date}
                    onChange={date => setDate(date)} />
            </div>

            <div className="row form-group">
                <div className="col">
                    <button onClick={handleAdd} className="btn btn-primary">Ajouter Livre</button>
                </div>
                <div className="col">
                        <button onClick={handleCancel} className="btn btn-primary">Annuler</button>
                </div>
            </div>

        </form>
    </div>



)

}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddBook: (book) => dispatch(startAddBook(book))
    }
};

const mapToProps = (state) => {
    return {
        books: state.books,
        students: state.expenses
    }
};

export default connect(mapToProps, mapDispatchToProps)(BookAdd);