import { NavLink, Link } from 'react-router-dom'
import React, { useState } from 'react'
import { setTextFilter, sortByAmount, sortByDate, setNomFilter } from '../actions/filters'
import { setTextFiltertParent } from '../actions/parent-filter'
import { connect } from 'react-redux'
import SideBar from './SideBar'
import { OrbitSpinner, AtomSpinner } from 'react-epic-spinners';
import { Transition } from 'semantic-ui-react'
import "./../Authenticationstyle.css"

const Header = ({ dispatch }, props) => {

  const [openSideBar, setOpenSideBar] = useState(false)

  const style = {
    "display": openSideBar ? 'flex' : 'none',
  }

  return (
    <div >
      <header >

        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#398B93"}}>
          <button style={{ backgroundColor: "#398B93", color: "white" }} onClick={() => setOpenSideBar(!openSideBar)}>&#9776;</button>

          <AtomSpinner color='black' size={40} />

          <a className="navbar-brand" style={{ backgroundColor: "#398B93" }} > LIBRARY APP</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/" activeClassName="is-active" exact={true} > Liste d'étudiants </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/ParentsList" activeClassName="is-active" >Liste Parents</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/BookList" activeClassName="is-active" >Liste Livres</NavLink>
              </li>
              {/* <li className="nav-item active">
                    <NavLink className="nav-link" to="/addStudent" activeClassName="is-active">Ajout Etudiants</NavLink>
              </li>
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/addParent" activeClassName="is-active">Ajout Parent</NavLink>
               </li> */}


            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search First Name"
                onChange={(e) => { dispatch(setNomFilter(e.target.value)) || (dispatch(setTextFilter(e.target.value))); dispatch(setTextFiltertParent(e.target.value)) }} />
            </form>
            <div className="nav-link dropdown-toggle"   id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={require("../images/logo.png")} width="30" height="30" className="rounded-circle" />
            </div>
          </div>
        </nav>

        <h1 className="testTilte">  <img src={require("../images/logo.png")} style={{ height: "60px" }} /> LIBRARY APP</h1>
      </header>
      {/* <Transition visible={openSideBar}  animation='scale' duration={500}> */}
      <div style={style} className="fadeIn">
        <SideBar />
      </div>
      {/* </Transition> */}
    </div >
  )
};

export default connect()(Header);