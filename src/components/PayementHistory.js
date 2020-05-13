import React, { useState } from "react"
import { connect } from 'react-redux'

const PayementHistory = (props) => {

    return (
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
    )

}



export default PayementHistory;


