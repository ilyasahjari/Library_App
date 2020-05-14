import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SideBar from "../components/SideBar"
import Dashboard from "../components/Dashboard"
import StudentAdd from "../components/StudentAdd"
import ParentAddForm from "../components/ParentAddForm"
import ErrorMessage from "../components/ErrorMessage"
import Header from "../components/Header"
import StudentEdit from "../components/StudentEdit"
import  ParentsList  from '../components/ParentsList';
import StudentProfil from '../components/StudentProfil';
import ParentEdit from '../components/ParentEdit';
import BookAdd from '../components/BookAdd';
import BookList  from '../components/BookList';
import BookEdit from '../components/BookEdit';
import "../Authenticationstyle.css"
import "../App1.css"
import "../SideBar.css"

function AppRouter(props) {
    

    return (
        <BrowserRouter>
           <SideBar />
          <Header connect={props.connect}/>

          <Switch >
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
