import { NavLink } from 'react-router-dom'
import React from 'react'
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'
import { setTextFiltertParent } from '../actions/parent-filter'
import { connect } from 'react-redux'

const Header = ({ dispatch }) => (
  <div >
    <header >
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand bg-dark" style={{color:"white"}} >LIBRARY APP</a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" activeClassName="is-active" exact={true} > Liste d'étudiants </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/ParentsList" activeClassName="is-active">Liste Parents</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/addStudent" activeClassName="is-active">Ajout Etudiants</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/addParent" activeClassName="is-active">Ajout Parent</NavLink>
          </li>
          
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search First Name" 
            onChange={(e) => { dispatch(setTextFilter(e.target.value)); dispatch(setTextFiltertParent(e.target.value)) }}/>
          </form>
        </div>
      </nav>
        <h1 className="testTilte">LIBRARY APP</h1>
    </header>
  </div >
    );
    
export default connect()(Header);