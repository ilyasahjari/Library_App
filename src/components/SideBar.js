import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    return (

        <div>
            <nav class="main-menu">
            <ul>

                <li class="has-subnav">
                    <Link to={"./addStudent"}>
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            Ajouter Etudiant
                        </span>
                    </Link>
                    
                </li>
                <li class="has-subnav">
                    <Link to={"./addBook"}>
                       <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                            Ajouter Livre
                        </span>
                    </Link>
                    
                </li>
                <li class="has-subnav">
                    <Link to={"./addParent"}>
                       <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            Ajouter Parent
                        </span>
                    </Link>
                   
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