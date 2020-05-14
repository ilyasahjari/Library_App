import { NavLink, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { setTextFilter, sortByAmount, sortByDate, setNomFilter } from '../actions/filters'
import { setTextFiltertParent } from '../actions/parent-filter'
import { connect } from 'react-redux'
import SideBar from './SideBar'
import { OrbitSpinner, AtomSpinner } from 'react-epic-spinners';
import { Transition } from 'semantic-ui-react'
import "./../Authenticationstyle.css"

const Header = ({ dispatch }, props) => {

  const [openSideBar, setOpenSideBar] = useState(false)

  const [back, setBack] = useState(true)

  const styleSideNav = {
    "display": openSideBar ? 'flex' : 'none',
  }

  const styleNav = {
    backgroundColor: back ? console.log("normal") : "black",
    "WebkitTransition":" background-color 1s",
    "transition": "background-color 1s"
  }


  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY < 40 ? setBack(true) : setBack(false);
    })
  })

  return (
    <div style={{marginBottom: '100px'}}>
      <header >

        <nav className="navbar navbar-expand-lg fixed-top" style={styleNav}>
        <AtomSpinner color='black' size={40} /> &nbsp;&nbsp;&nbsp;

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <a className="navbar-brand" style={{color:"black" }} > LIBRARY APP</a>
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
            <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={require("../images/logo.png")} width="30" height="30" className="rounded-circle" />
            </div>
          </div>
        </nav>

        {/* <h1 className="testTilte">  <img src={require("../images/logo.png")} style={{ height: "60px" }} /> LIBRARY APP</h1> */}
      </header>
   
    </div >

  )
};

export default connect()(Header);