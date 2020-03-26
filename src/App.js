import React from 'react';
import configureStore from './store/configureStore'
import AppRouter from './Router/AppRouter'
import { addBook, startAddBook } from './actions/expenses' 
import getVisibleExpenses from './selectors/expenses'
import {sortByAmount, sortByDate, setTextFilter} from './actions/filters'
import { Provider } from 'react-redux'
import { app } from 'firebase';

// const store = configureStore();
// //console.log(store.getState());


// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = state.expenses;
//     console.log(visibleExpenses);
// });



//const expenseOne = store.dispatch(addBook({ nom: "ahjari", prenom: "ilyas", classe: "M1", date: 4000}));
//const expenseTwo = store.dispatch(startAddBook({ nom: "dardab", prenom: "amine", classe: "L3", date: 2000 }));
//const expenseThree = store.dispatch(startAddBook({ nom: "bazine", prenom: "mehdi", classe: "L2", date: 1000 }));

//store.dispatch(sortByDate());
// function App() 
// {
//     return (
//         <Provider store={store}>
//             <AppRouter/>
//         </Provider>
//     );
// }


// export default App;
