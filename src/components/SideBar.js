import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import { Link, NavLink } from 'react-router-dom';

const SideBar = (props) => {
    return (

        <div>
            <nav className="main-menu">
            <ul>

                <li className="has-subnav">
                    <NavLink to={"/addStudent"}>
                        <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                            Ajouter Etudiant
                        </span>
                    </NavLink>
                    
                </li>
                <li className="has-subnav">
                    <NavLink to={"/addBook"}>
                       <i className="fa fa-list fa-2x"></i>
                        <span className="nav-text">
                            Ajouter Livre
                        </span>
                    </NavLink>
                    
                </li>
                <li className="has-subnav">
                    <NavLink to={"/addParent"}>
                       <i className="fa fa-folder-open fa-2x"></i>
                        <span className="nav-text">
                            Ajouter Parent
                        </span>
                    </NavLink>
                   
                </li>
                
                {/* <li>
                    <a href="#">
                        <i class="fa fa-font fa-2x"></i>
                        <span class="nav-text">
                           Quotes
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i class="fa fa-table fa-2x"></i>
                        <span class="nav-text">
                            Tables
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Maps
                        </span>
                    </a>
                </li> */}
                
            </ul>

            
            </nav>
        </div>
    )
};

export default SideBar;