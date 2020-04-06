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
import {startAddBook, startSetBook} from './actions/book'
import './firebase/firebase';
import { PersistGate } from 'redux-persist/integration/react'

const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = state.books;

    console.log(visibleExpenses);

});


const jsx = (
    <Provider store={store}>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"/>
        {/*<PersistGate persistor={Store.persistor}>*/}
        <AppRouter />
        {/*</PersistGate>*/}
    </Provider>
);



//ReactDOM.render(jsx, document.getElementById('root'));
store.dispatch(startSetBook());
store.dispatch(startSetParent());


store.dispatch(startSetStudent() || startSetBook() || startSetParent()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
});





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
