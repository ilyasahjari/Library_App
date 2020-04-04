import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

const SideBar = (props) =>
    {
    return(
        <div className="sidenav">
            <NavLink to="/addStudent" activeClassName="is-active">Ajout Etudiant</NavLink>
            <NavLink to="/addParent" activeClassName="is-active">Ajout Parent</NavLink>
            <NavLink to="/addBook" activeClassName="is-active">Ajout Livre</NavLink>
        </div>
    )};

export default SideBar;