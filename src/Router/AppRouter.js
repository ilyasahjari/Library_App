import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from "../components/Dashboard"
import StudentAdd from "../components/StudentAdd"
import ParentAddForm from "../components/ParentAddForm"
import StudentDelete from "../components/StudentDelete"
import ErrorMessage from "../components/ErrorMessage"
import Header from "../components/Header"
import StudentEdit from "../components/StudentEdit"
import { connect } from "react-redux"
import  ParentsList  from '../components/ParentsList';
import StudentProfil from '../components/StudentProfil';

function AppRouter() {
    

    // const book = {
    //   title: 'la boite a merveille',
    //   author : 'ahmed sefrioui',
    //   publisher: {
    //     name : 'bac'
    //   }
    // }
    // const { name : publisherName } = book.publisher;
    // console.log("the name is "+ publisherName);

    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/addStudent" component={StudentAdd} />
            <Route path="/edit/:id" component={StudentEdit}/>
            <Route path="/addParent" component={ParentAddForm}/>
            <Route path="/ParentsList" component={ParentsList}/>
            <Route path="/StudentProfil/:id" component={StudentProfil}/>
            <Route component={ErrorMessage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  


  export default AppRouter;
