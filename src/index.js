import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './Router/AppRouter'
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import { startSetStudent } from './actions/expenses';
import {  startSetParent } from './actions/parent'
import './firebase/firebase';
import { PersistGate } from 'redux-persist/integration/react'

const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = state.parents;
    
    console.log(visibleExpenses);

});



const jsx = (
    <Provider store={store}>
        {/*<PersistGate persistor={Store.persistor}>*/}
            <AppRouter />
        {/*</PersistGate>*/}
    </Provider>
);

//ReactDOM.render(jsx, document.getElementById('root'));
store.dispatch(startSetParent());

store.dispatch(startSetStudent()).then(() => {
     ReactDOM.render(jsx, document.getElementById('root'));
});





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
