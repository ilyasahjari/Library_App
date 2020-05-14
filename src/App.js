import React, { useState, useEffect } from 'react';
import configureStore from './store/configureStore'
import AppRouter from './Router/AppRouter'
import AuthenticationPage from './components/AuthenticationPage'
import { addBook, startAddBook } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import { sortByAmount, sortByDate, setTextFilter } from './actions/filters'
import { Provider } from 'react-redux'
import { app } from 'firebase';
import AuthentificationPage from './components/AuthenticationPage';
import "./sidebar.css"


const App = (props) => {
    const [connect, setConnect] = useState(false)
    //Update 
    useEffect(() => {
        const data = localStorage.getItem("connect");
        if (data) {
            setConnect(JSON.parse(data));
        }
    }, []);


    //recuperer les donnees et les mettre dans le local storage
    useEffect(() => {
        localStorage.setItem("connect", JSON.stringify(connect))
    });


    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />

            {connect || <AuthentificationPage connect={setConnect} />}
            {connect && <AppRouter connect={setConnect} />}
        </div>
    )

}

export default App;
