import React, { useState } from "react"
import { connect } from 'react-redux'
import { Modal, Button } from "react-bootstrap"
import { CSVLink } from "react-csv"

const PayementHistory = (props) => {

    return (
        <div>
            <br />
            <Modal size="lg" show={props.show} onHide={props.handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Historique Paiements :</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
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


                </Modal.Body>
                <Modal.Footer>
                <CSVLink  style={{marginBottom:"50px"}} data={props.payements} filename={`payements.csv`} separator={";"} enclosingCharacter={`'`} ><Button variant="primary">Telecharger CSV</Button></CSVLink>
                    

                </Modal.Footer>
            </Modal>
        </div>
    )

}



export default PayementHistory;


