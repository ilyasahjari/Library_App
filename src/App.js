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
            {connect || <AuthentificationPage connect={setConnect} />}
            {connect && <AppRouter connect={setConnect} />}
        </div>
    )

}

export default App;
