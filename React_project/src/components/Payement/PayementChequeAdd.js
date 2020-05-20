import React from 'react'

export default  (props) => {
    if (props.payementMethod === "Cheque") {
        return (
        <div>
            <br />
            <div className="row">
                <div className="col">
                    Banque:
                </div>
                <div className="col" >
                    <input name="banque" className="form-control-sm" onChange={props.onChange} value={props.banque}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Num Cheque:
                </div>
                <div className="col">
                    <input name="numCheque" className="form-control-sm" onChange={props.onChange} value={props.numCheque}/>
                </div>
            </div>
                    Num Env:<br/>
                    <input name="numEnveloppe" className="form-control-sm" onChange={props.onChange} value={props.numEnv}/>
                
        </div>
        )
    }
    return null;
}