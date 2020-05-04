import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './Router/AppRouter'
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import { startSetStudent } from './actions/expenses';
import { startSetParent } from './actions/parent';
import { startSetPayement } from './actions/payement';
import {startAddBook, startSetBook} from './actions/book'
import './firebase/firebase';
import { PersistGate } from 'redux-persist/integration/react'
import "./Authenticationstyle.css"


const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = state.payements;

    console.log(visibleExpenses);

});


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);



//ReactDOM.render(jsx, document.getElementById('root'));
store.dispatch(startSetBook());
store.dispatch(startSetParent());
store.dispatch(startSetPayement());

store.dispatch(startSetStudent() || startSetBook() || startSetParent()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
});





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
