import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const ErrorMessage = (props) => {
  const handleBackHome = (e) => {
    e.preventDefault()
    props.history.push('/')
  }
  return (
    <div className="container App" >
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>
              Oops!
            </h1>
            <h2>
              404 Not Found
            </h2>
            <div className="error-details">
              Désolé, une erreur s'est produite. La page demandée n'a pas été trouvée !
            </div>
            <div className="error-actions">
              <NavLink className="btn btn-primary btn-lg" to="/" exact={true} > RETOUR PAGE D'ACCUEIL </NavLink>
              {/* <a onClick={handleBackHome} className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </a>*/}<a target="_Blank" href="" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ErrorMessage;