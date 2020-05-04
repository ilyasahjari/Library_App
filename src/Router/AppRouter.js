import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux"
import SideBar from "../components/SideBar"
import Dashboard from "../components/Dashboard"
import StudentAdd from "../components/StudentAdd"
import ParentAddForm from "../components/ParentAddForm"
import StudentDelete from "../components/StudentDelete"
import ErrorMessage from "../components/ErrorMessage"
import Header from "../components/Header"
import StudentEdit from "../components/StudentEdit"
import  ParentsList  from '../components/ParentsList';
import StudentProfil from '../components/StudentProfil';
import ParentEdit from '../components/ParentEdit';
import BookAdd from '../components/BookAdd';
import BookList  from '../components/BookList';
import BookEdit from '../components/BookEdit';
import AuthentificationPage from '../components/AuthenticationPage';
import "../Authenticationstyle.css"
import { checkPropTypes } from 'prop-types';


function AppRouter(props) {
    

    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />    
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"/>
       
       
        <div>
        <BrowserRouter>
          <Header connect={props.connect}/>
          <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/BookList" component={BookList}/>
            <Route path="/addStudent" component={StudentAdd} />
            <Route path="/edit/:id" component={StudentEdit}/>
            <Route path="/addParent" component={ParentAddForm}/>
            <Route path="/addBook" component={BookAdd}/>
            <Route path="/ParentsList" component={ParentsList}/>
            <Route path="/StudentProfil/:id" component={StudentProfil}/>
            <Route path="/ParentEdit/:id" component={ParentEdit}/>
            <Route path="/BookEdit/:id" component={BookEdit}/>
            <Route component={ErrorMessage} />
          </Switch>
        </BrowserRouter>
        </div>

      </div>
    );
  }
  

    // const book = {
    //   title: 'la boite a merveille',
    //   author : 'ahmed sefrioui',
    //   publisher: {
    //     name : 'bac'
    //   }
    // }
    // const { name : publisherName } = book.publisher;
    // console.log("the name is "+ publisherName);


  export default AppRouter;
