import React, { useState } from 'react';
import { startEditPayement, startAddPayement } from '../actions/payement'
import { connect } from 'react-redux'
import { Checkbox } from '@material-ui/core';
import PayementChequeAdd from './PayementChequeAdd';
import ModalPayementCheck from './ModalPayementCheck';
import { Button } from 'react-bootstrap';





const PayementAdd = (props) => {
    const [idStudent, setIdStudent] = useState(props.idStudent);
    const [showCheckPayement, setShowCheckPayement] = useState(false);
    const [showHistory, setShowHistory] = useState(false);

    let date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;



    const [statePayement, setStatePayement] = useState({
        caution: 0,
        calculatrice: 0,
        normographe: 0,
        cleUSB: 0,
        commentaire: "",
        payementMethod: "",
        banque: "",
        numCheque: "",
        numEnveloppe: ""
    })

    const elementPrice = {
        "caution": 100,
        "calculatrice": 68,
        "normographe": 5,
        "cleUSB": 5
    }



    const totalPayement = (element) => {
        return (
            props.payements.map((payement) => payement[element]).reduce((sum, value) => sum + value, 0)
        )
    }

    const diffElement = (element) => {
        return elementPrice[element] - totalPayement(element);
    }

    const checkValue = (element) => {
        return (diffElement(element) - statePayement[element]) >= 0
    }

    const totalToPayement = parseInt(statePayement.caution) + parseInt(statePayement.calculatrice) + parseInt(statePayement.cleUSB) + parseInt(statePayement.normographe);

        const onStatePayementChange = (e) => {
            setStatePayement({ ...statePayement, [e.target.name]: e.target.value });
        }


    const handleAddPayement = (e) => {
        e.preventDefault()
        setShowCheckPayement(false);
        if (statePayement.caution || statePayement.normographe || statePayement.calculatrice || statePayement.cleUSB)
            if (statePayement.payementMethod)
                if (checkValue("caution") && checkValue("calculatrice") && checkValue("normographe") && checkValue("cleUSB")) {
                    props.startAddPayement({
                        caution: parseInt(statePayement.caution),
                        calculatrice: parseInt(statePayement.calculatrice),
                        normographe: parseInt(statePayement.normographe),
                        cleUSB: parseInt(statePayement.cleUSB),
                        payementMethod: statePayement.payementMethod,
                        commentaire: statePayement.commentaire,
                        banque: statePayement.banque,
                        numEnveloppe: statePayement.numEnveloppe,
                        numCheque: statePayement.numCheque,
                        idStudent,
                        date
                    })
                }
                else
                    alert("Valeurs incorrecte")
            else{
                alert("Veuillez remplir la methode de paiement")
                return;
            }
        else
            alert("Veuillez payer quelque chose ...")


        setStatePayement({
            caution: 0,
            calculatrice: 0,
            normographe: 0,
            cleUSB: 0,
            commentaire: "",
            payementMethod: "",
            numCheque: "",
            numEnveloppe: "",
            banque: ""
        })

    }


    return (
        <div>
            <table className="table">
                <thead>
                    <tr style={{textAlign:"center"}}>
                        <th scope="col"></th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Montant Restant</th>
                        <th scope="col">payer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{backgroundColor:"white"}}>
                        <td>
                            <img src={require('./../images/caution.png')} style={{ height: "50px" }} alt="normographe" />
                        </td>
                        <td scope="row">Caution</td>
                        <td>100€</td>
                        <td>
                            {diffElement("caution")}
                        </td>
                        <td>
                            {diffElement("caution") ? <input name="caution" className="form-control" type="number" onChange={onStatePayementChange} style={{ width: "100px" }} value={statePayement.caution} /> : <Checkbox checked={true} disabled={true}  name="cleUSB" />}
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <img src={require('./../images/calculatrice.jpg')} style={{ height: "50px" }} alt="calculatrice" />
                        </td>
                        <td scope="row">Calculatrice</td>
                        <td>68€</td>
                        <td>
                            {diffElement("calculatrice")}
                        </td>
                        <td>
                            {diffElement("calculatrice") ? <input name="calculatrice" className="form-control input-full" type="number" onChange={onStatePayementChange} value={statePayement.calculatrice} style={{ width: "100px" }} /> : <Checkbox checked={true} disabled={true} color="primary" name="cleUSB" />}
                        </td>
                    </tr>
                    <tr style={{backgroundColor:"white"}}>
                        <td><img src={require('./../images/normographe.jpg')} style={{ height: "50px" }} alt="normographe" /></td>
                        <td scope="row">Normographe</td>
                        <td>5€</td>

                        <td>
                            {diffElement("normographe")}
                        </td>
                        <td>
                            {diffElement("normographe") ? <input name="normographe" className="form-control" type="number" onChange={onStatePayementChange} value={statePayement.normographe} style={{ width: "100px" }} /> : <Checkbox checked={true} disabled={true} color="primary" name="cleUSB" />}
                        </td>
                    </tr>
                    <tr>
                        <td><img src={require('./../images/cleUSB.jpg')} style={{ height: "50px" }} alt="cleUSB" /></td>
                        <td scope="row">Clé USB</td>
                        <td>5€</td>
                        <td>
                            {diffElement("cleUSB")}
                        </td>
                        <td>
                            {diffElement("cleUSB") ? <input name="cleUSB" className="form-control" type="number" onChange={onStatePayementChange} value={statePayement.cleUSB} style={{ width: "100px" }} /> : <Checkbox checked={true} disabled={true} color="primary" name="cleUSB" />}
                        </td>
                    </tr>

                    <tr style={{backgroundColor:"white"}}>

                        <td>
                            Commentaire:
                        </td>
                        <td>
                            <textarea name="commentaire" className="form-control" id="exampleFormControlTextarea1" onChange={onStatePayementChange} value={statePayement.commentaire} rows="2" />
                        </td>
                        <td />
                        <td />
                        <td />
                    </tr>

                    <tr>
                        <td />
                        <td>
                            TOTAL A PAYÉ
                        </td>
                        <td>
                            {isNaN(totalToPayement) ? 0 : totalToPayement}
                        </td>
                        <td>
                            <select name="payementMethod" className="form-control" onChange={onStatePayementChange} value={statePayement.payementMethod}>
                                <option value="" disabled hidden>Methode de payement</option>
                                <option>CB</option>
                                <option>Cheque</option>
                                <option>HDF</option>
                                <option>espece</option>
                            </select>
                            <PayementChequeAdd payementMethod={statePayement.payementMethod} onChange={onStatePayementChange} banque={statePayement.banque} numCheque={statePayement.numCheque} numEnv={statePayement.numEnv} />
                        </td>
                        <td>
                            <button className="btn btn-primary" onClick={() => setShowCheckPayement(true)}>Payer</button>
                            <ModalPayementCheck handleClose={() => setShowCheckPayement(false)} handleClose={() => setShowCheckPayement(false)} show={showCheckPayement} handleAddPayement={handleAddPayement} />
                        </td>
                    </tr>

                </tbody>
            </table>
            <Button onClick={() => setShowHistory(!showHistory)}>
                {showHistory ? "Masquer Historique paiements" : "Afficher Historique paiements"}
            </Button>
            {
                showHistory &&

                <div>
                    <br />
                    <h5>
                        Historique Paiements
                        </h5>
                    <br />
                    <table className="table table-sm table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Methode de paiement</th>
                                <th scope="col">Date</th>
                                <th scope="col">Caution</th>
                                <th scope="col">Calculatrice</th>
                                <th scope="col">Normographe</th>
                                <th scope="col">Clé USB</th>
                                <th scope="col">Commentaire</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.payements.map((payement) => {
                                return (
                                    <tr key={payement.id}>
                                        <td>{payement.payementMethod} {payement.payementMethod === "Cheque" ? ` : Banque :${payement.banque}, numEnv :${payement.numEnv}, numCheque: ${payement.numCheque}` : null}</td>
                                        <td>{payement.date}</td>
                                        <td>{payement.caution}€</td>
                                        <td>{payement.calculatrice}€</td>
                                        <td>{payement.normographe}€</td>
                                        <td>{payement.cleUSB}€</td>
                                        <td>{payement.commentaire}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            }

        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddPayement: (payement) => dispatch(startAddPayement(payement))
    }
};


const mapToProps = (state, props) => {
    return {
        payements: (state.payements) ? state.payements.filter((payement) => payement.idStudent === props.idStudent) : null
    }
}

export default connect(mapToProps, mapDispatchToProps)(PayementAdd);